"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { finalCta } from "@/lib/content";
import Icon from "./ui/Icon";

interface FormState {
  name: string;
  structure: string;
  email: string;
  phone: string;
}

export default function FinalCTA() {
  const [form, setForm] = useState<FormState>({ name: "", structure: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

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

  const inputCls =
    "w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-300 transition-colors focus:border-[#8DC63F] focus:outline-none focus:ring-2 focus:ring-[#8DC63F]/30";

  return (
    <section id="contact" className="relative overflow-hidden bg-night py-24 text-white">
      <div className="absolute inset-0 bg-night-grid bg-grid opacity-50" />
      <div className="absolute left-0 top-0 h-[400px] w-[500px] rounded-full bg-[#8DC63F]/12 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Gauche — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#8DC63F]/30 bg-[#8DC63F]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#a8d660]">
              {finalCta.eyebrow}
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              {finalCta.headline}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/55">{finalCta.subheadline}</p>

            <ul className="mt-8 flex flex-col gap-3">
              {finalCta.trustItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8DC63F]/20">
                    <Icon name="check" className="h-3 w-3 text-[#8DC63F]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Contacts directs */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {finalCta.contacts.map((c) => (
                <div key={c.email} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">Contact direct</p>
                  <p className="mt-1 font-display text-base font-bold">{c.name}</p>
                  <a href={`mailto:${c.email}`} className="block text-sm text-[#a8d660] hover:underline">{c.email}</a>
                  <p className="text-sm text-white/70">{c.phone}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Droite — formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl bg-white p-8 shadow-2xl sm:p-10">
              <div className="absolute inset-x-10 top-0 h-0.5 rounded-full bg-gradient-to-r from-[#8DC63F]/0 via-[#8DC63F] to-[#8DC63F]/0" />
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#8DC63F]/12">
                    <Icon name="check" className="h-8 w-8 text-[#8DC63F]" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-gray-900">Demande envoyée !</h3>
                  <p className="mt-2 leading-relaxed text-gray-500">{finalCta.successMessage}</p>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-display text-xl font-bold text-gray-900">{finalCta.formTitle}</h3>
                  <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">{finalCta.fields.name.label}</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder={finalCta.fields.name.placeholder} className={inputCls} />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">{finalCta.fields.structure.label}</label>
                      <input type="text" name="structure" required value={form.structure} onChange={handleChange} placeholder={finalCta.fields.structure.placeholder} className={inputCls} />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">{finalCta.fields.email.label}</label>
                        <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder={finalCta.fields.email.placeholder} className={inputCls} />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">{finalCta.fields.phone.label}</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder={finalCta.fields.phone.placeholder} className={inputCls} />
                      </div>
                    </div>
                    {status === "error" && <p className="text-sm text-red-500">{errorMsg}</p>}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#8DC63F] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#8DC63F]/25 transition-all hover:bg-[#6fa32e] hover:shadow-[#8DC63F]/40 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "loading" ? (
                        <>
                          <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Envoi en cours...
                        </>
                      ) : (
                        finalCta.submitLabel
                      )}
                    </button>
                    <p className="text-center text-xs text-gray-400">Vos données sont confidentielles et ne seront jamais revendues.</p>
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
