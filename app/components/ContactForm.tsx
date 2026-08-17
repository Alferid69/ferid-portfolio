"use client";
import React, { useState } from "react";
import { Loader2, ChevronRight, CheckCircle2 } from "lucide-react";
import { EMAIL_ADDRESS, WEB3FORMS_ACCESS_KEY } from "../config";

type FormStatus = "idle" | "submitting" | "success" | "error";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [validationError, setValidationError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    const missingFields = (
      ["name", "email", "message"] as const
    ).filter((field) => !formData[field].trim());

    if (missingFields.length > 0) {
      setValidationError(
        `Please fill in: ${missingFields.join(", ")}.`,
      );
      return;
    }

    if (
      !WEB3FORMS_ACCESS_KEY ||
      WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE"
    ) {
      // Fallback: no Web3Forms key configured, open the email client instead.
      const subject = encodeURIComponent(
        `Portfolio Message from ${formData.name}`,
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      );
      window.open(`mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`);
      setValidationError(
        "No Web3Forms access key configured — opened your email client instead.",
      );
      return;
    }

    setFormStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Portfolio Contact Form",
          subject: `New Message from ${formData.name}`,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setFormStatus("success");
        setFormData(INITIAL_FORM_DATA);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    }
  };

  if (formStatus === "success") {
    return (
      <div
        role="status"
        className="bg-slate-950/60 border border-emerald-500/30 p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-4"
      >
        <CheckCircle2 className="text-emerald-400 w-16 h-16 animate-bounce" />
        <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
        <p className="text-slate-400 text-sm max-w-xs">
          Thank you! Your message has been sent successfully. I will get back to
          you as soon as possible.
        </p>
        <button
          onClick={() => setFormStatus("idle")}
          className="mt-4 px-6 py-2 bg-slate-900 hover:bg-slate-800 text-teal-400 border border-slate-800 rounded-lg text-sm transition-all"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleFormSubmit} noValidate>
      {/* Honeypot field to filter out bots (Web3Forms convention) */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        style={{ display: "none" }}
        aria-hidden="true"
      />
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-slate-400 mb-1.5"
        >
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all"
          placeholder="Will Smith"
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-slate-400 mb-1.5"
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all"
          placeholder="willsmith@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-slate-400 mb-1.5"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all"
          placeholder="How can I help you?"
        ></textarea>
      </div>

      {(formStatus === "error" || validationError) && (
        <p role="alert" className="text-red-400 text-sm">
          {validationError ||
            `Something went wrong. Please try again or email directly at ${EMAIL_ADDRESS}.`}
        </p>
      )}

      <button
        type="submit"
        disabled={formStatus === "submitting"}
        className="w-full bg-teal-500 hover:bg-teal-400 disabled:bg-teal-600 disabled:cursor-not-allowed text-slate-950 font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-500/10 hover:shadow-teal-500/20 active:scale-98"
      >
        {formStatus === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <ChevronRight size={18} />
          </>
        )}
      </button>
    </form>
  );
}
