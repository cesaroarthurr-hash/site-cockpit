"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { finalCta } from "@/lib/content";

interface FormState {
  name: string;
  structure: string;
  email: string;
  phone: string;
}

export default function FinalCTA() {
  const [form, setForm] = useState<FormState>({
    name: "",
    structure: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Une erreur est survenue.");
      }
      setStatus("success");
      setForm({ name: "", structure: "", email: "", phone: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#8DC63F]/10 text-[#5a8a1f] border border-[#8DC63F]/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8DC63F] animate-pulse" />
              Démo gratuite — réponse sous 24h
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {finalCta.headline}
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              {finalCta.subheadline}
            </p>

            {/* Trust signals */}
            <div className="flex flex-col gap-3 mb-10">
              {finalCta.trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8DC63F]/15 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-[#8DC63F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/80 p-8 sm:p-10">
              {/* Green top accent */}
              <div className="absolute top-0 left-10 right-10 h-0.5 bg-gradient-to-r from-[#8DC63F]/0 via-[#8DC63F] to-[#8DC63F]/0 rounded-full" />

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-[#8DC63F]/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#8DC63F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Candidature envoyée !</h3>
                  <p className="text-gray-500 leading-relaxed">{finalCta.successMessage}</p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{finalCta.formTitle}</h3>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {finalCta.fields.name.label}
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder={finalCta.fields.name.placeholder}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8DC63F]/30 focus:border-[#8DC63F] transition-colors"
                      />
                    </div>

                    {/* Structure */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {finalCta.fields.structure.label}
                      </label>
                      <input
                        type="text"
                        name="structure"
                        required
                        value={form.structure}
                        onChange={handleChange}
                        placeholder={finalCta.fields.structure.placeholder}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8DC63F]/30 focus:border-[#8DC63F] transition-colors"
                      />
                    </div>

                    {/* Email + Phone — row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {finalCta.fields.email.label}
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder={finalCta.fields.email.placeholder}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8DC63F]/30 focus:border-[#8DC63F] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {finalCta.fields.phone.label}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder={finalCta.fields.phone.placeholder}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8DC63F]/30 focus:border-[#8DC63F] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Error */}
                    {status === "error" && (
                      <p className="text-sm text-red-500">{errorMsg}</p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full mt-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-[#8DC63F] text-white hover:bg-[#6fa32e] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-[#8DC63F]/25 hover:shadow-[#8DC63F]/40 flex items-center justify-center gap-2"
                    >
                      {status === "loading" ? (
                        <>
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Envoi en cours...
                        </>
                      ) : (
                        finalCta.submitLabel
                      )}
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      Vos données sont confidentielles et ne seront jamais revendues.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
