import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

test("renders the main hero heading", () => {
  render(<Home />);
  expect(screen.getByRole("heading", { level: 1 })).toBeDefined();
});

test("renders section headings and navigation links", () => {
  render(<Home />);
  expect(
    screen.getByRole("heading", { name: "Technical Expertise" }),
  ).toBeDefined();
  expect(
    screen.getByRole("heading", { name: "Featured Projects" }),
  ).toBeDefined();
  expect(screen.getByRole("link", { name: "About" })).toBeDefined();
});

test("renders project cards from data", () => {
  render(<Home />);
  expect(screen.getByRole("heading", { name: "OwePay" })).toBeDefined();
  expect(
    screen.getByRole("heading", { name: "Lucid Shopping" }),
  ).toBeDefined();
});
