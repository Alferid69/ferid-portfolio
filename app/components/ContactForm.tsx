"use client";
import React, { useState } from "react";
import { Loader2, ChevronRight, CheckCircle2 } from "lucide-react";

const EMAIL_ADDRESS = "mrferidhassen@gmail.com";
const WEB3FORMS_ACCESS_KEY: string = "b20f0b25-3a7e-49cf-951a-4a55709568a5";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    if (
      !WEB3FORMS_ACCESS_KEY ||
      WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE"
    ) {
      alert(
        `Note: You haven't configured a Web3Forms access key yet. To send emails directly from the browser, get a free key from web3forms.com and paste it in the code.\n\nOpening your email client as a fallback!`,
      );

      const subject = encodeURIComponent(
        `Portfolio Message from ${formData.name}`,
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      );
      window.open(`mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`);
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
        setFormData({ name: "", email: "", message: "" });
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
      <div className="bg-slate-950/60 border border-emerald-500/30 p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-4">
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
    <form className="space-y-4" onSubmit={handleFormSubmit}>
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-1.5">
          Name
        </label>
        <input
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
        <label className="block text-sm font-medium text-slate-400 mb-1.5">
          Email
        </label>
        <input
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
        <label className="block text-sm font-medium text-slate-400 mb-1.5">
          Message
        </label>
        <textarea
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all"
          placeholder="How can I help you?"
        ></textarea>
      </div>

      {formStatus === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please try again or email directly at{" "}
          {EMAIL_ADDRESS}.
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
