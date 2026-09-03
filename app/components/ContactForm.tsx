"use client";
import React, { useState } from "react";
import { Loader2, ArrowRight, CheckCircle2 } from "lucide-react";
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
        className="bg-[#161822] border border-emerald-500/30 p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-4"
      >
        <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-xl font-bold text-white">Message Sent!</h3>
        <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
          Thank you. Your message has been routed successfully and I will respond promptly.
        </p>
        <button
          onClick={() => setFormStatus("idle")}
          className="mt-4 px-5 py-2 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 rounded-xl text-xs font-medium transition-all"
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
          className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-medium"
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
          className="w-full bg-[#161822] border border-[#232736] rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all text-sm"
          placeholder="e.g. Alex Morgan"
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-medium"
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
          className="w-full bg-[#161822] border border-[#232736] rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all text-sm"
          placeholder="alex@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-medium"
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
          className="w-full bg-[#161822] border border-[#232736] rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all text-sm resize-none"
          placeholder="Tell me about your project or opportunity..."
        ></textarea>
      </div>

      {(formStatus === "error" || validationError) && (
        <p role="alert" className="text-red-400 text-xs font-mono">
          {validationError ||
            `Submission failed. Please email directly at ${EMAIL_ADDRESS}.`}
        </p>
      )}

      <button
        type="submit"
        disabled={formStatus === "submitting"}
        className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-amber-600/50 disabled:cursor-not-allowed text-black font-semibold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 active:scale-98 text-sm shadow-sm"
      >
        {formStatus === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending message...
          </>
        ) : (
          <>
            Send Message <ArrowRight size={16} />
          </>
        )}
      </button>
    </form>
  );
}
