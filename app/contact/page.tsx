"use client";

import { useState } from "react";
import Link from "next/link";

interface FormState {
  name: string;
  structure: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", structure: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
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
      setForm({ name: "", structure: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour au site
          </Link>
          <div className="mt-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#8DC63F]/10 text-[#5a8a1f] border border-[#8DC63F]/20 mb-4">
              Contact
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Parlons de votre structure</h1>
            <p className="text-gray-500">Démo gratuite · Réponse sous 24h · Sans engagement</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-10">
          <div className="absolute top-0 left-10 right-10 h-0.5 bg-gradient-to-r from-[#8DC63F]/0 via-[#8DC63F] to-[#8DC63F]/0 rounded-full" />

          {status === "success" ? (
            <div className="flex flex-col items-center text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#8DC63F]/10 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#8DC63F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
              <p className="text-gray-500">Nous vous recontactons sous 24h.</p>
              <Link href="/" className="mt-6 text-sm text-[#8DC63F] hover:underline">Retour à l&apos;accueil</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Votre nom</label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Marie Dupont"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8DC63F]/30 focus:border-[#8DC63F] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Nom de la structure</label>
                  <input type="text" name="structure" required value={form.structure} onChange={handleChange} placeholder="Association Aide à domicile 44"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8DC63F]/30 focus:border-[#8DC63F] transition-colors" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email professionnel</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="marie@structure.fr"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8DC63F]/30 focus:border-[#8DC63F] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Téléphone <span className="text-gray-400 font-normal">(optionnel)</span></label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="06 12 34 56 78"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8DC63F]/30 focus:border-[#8DC63F] transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Votre message <span className="text-gray-400 font-normal">(optionnel)</span></label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Décrivez votre structure, vos enjeux actuels..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8DC63F]/30 focus:border-[#8DC63F] transition-colors resize-none" />
              </div>

              {status === "error" && <p className="text-sm text-red-500">{errorMsg}</p>}

              <button type="submit" disabled={status === "loading"}
                className="w-full mt-1 px-6 py-3.5 rounded-xl text-sm font-semibold bg-[#8DC63F] text-white hover:bg-[#6fa32e] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-[#8DC63F]/25 flex items-center justify-center gap-2">
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Envoi en cours...
                  </>
                ) : "Envoyer ma demande"}
              </button>
              <p className="text-xs text-gray-400 text-center">Vos données sont confidentielles et ne seront jamais revendues.</p>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
