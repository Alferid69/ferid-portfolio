import { afterEach, expect, test, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "../app/components/ContactForm";

afterEach(() => {
  vi.unstubAllGlobals();
});

test("renders fields with accessible labels", () => {
  render(<ContactForm />);
  expect(screen.getByLabelText("Name")).toBeDefined();
  expect(screen.getByLabelText("Email")).toBeDefined();
  expect(screen.getByLabelText("Message")).toBeDefined();
});

test("shows inline validation when submitting an empty form", () => {
  render(<ContactForm />);
  fireEvent.click(screen.getByRole("button", { name: /send message/i }));
  expect(screen.getByRole("alert").textContent).toContain("Please fill in");
});

test("submits to Web3Forms and shows success message", async () => {
  const fetchMock = vi.fn().mockResolvedValue({
    json: async () => ({ success: true }),
  });
  vi.stubGlobal("fetch", fetchMock);

  render(<ContactForm />);
  fireEvent.change(screen.getByLabelText("Name"), {
    target: { value: "Ada" },
  });
  fireEvent.change(screen.getByLabelText("Email"), {
    target: { value: "ada@example.com" },
  });
  fireEvent.change(screen.getByLabelText("Message"), {
    target: { value: "Hello!" },
  });
  fireEvent.click(screen.getByRole("button", { name: /send message/i }));

  await waitFor(() =>
    expect(screen.getByText("Message Sent!")).toBeDefined(),
  );

  expect(fetchMock).toHaveBeenCalledWith(
    "https://api.web3forms.com/submit",
    expect.anything(),
  );
  const [, options] = fetchMock.mock.calls[0];
  const body = JSON.parse(options.body);
  expect(body.name).toBe("Ada");
  expect(body.email).toBe("ada@example.com");
  expect(body.access_key).toBeTruthy();
});
