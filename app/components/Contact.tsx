"use client";

import { useState, FormEvent } from "react";

const socials = [
  {
    label: "GitHub",
    handle: "indriynirianto",
    href: "https://github.com/indriynirianto",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    color: "hover:border-white/30 hover:text-white",
    glow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
  },
  {
    label: "LinkedIn",
    handle: "indriyani-putri",
    href: "https://linkedin.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: "hover:border-blue-500/40 hover:text-blue-400",
    glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
  },
  {
    label: "Email",
    handle: "indrynirianto@gmail.com",
    href: "mailto:indrynirianto@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    color: "hover:border-purple-500/40 hover:text-purple-400",
    glow: "hover:shadow-[0_0_20px_rgba(147,51,234,0.15)]",
  },
  {
    label: "Instagram",
    handle: "@_indryni._",
    href: "https://instagram.com/_indryni._",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    color: "hover:border-pink-500/40 hover:text-pink-400",
    glow: "hover:shadow-[0_0_20px_rgba(236,72,153,0.15)]",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      {/* Ambient */}
      <div className="orb w-[400px] h-[400px] bg-blue-600/8 -bottom-20 left-1/2 -translate-x-1/2 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="section-line mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              04 — Contact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="gradient-heading">Let&apos;s Connect</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-lg text-base">
            Whether it&apos;s a collaboration, internship opportunity, or just a chat about tech — I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — Form */}
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-lg font-semibold text-white mb-6">Send a message</h3>
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center h-48 gap-4">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <p className="text-slate-300 text-sm font-medium">Message sent! I will get back to you soon.</p>
                <button onClick={() => setStatus("idle")} className="text-xs text-blue-400 hover:text-blue-300 underline transition-colors">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-500 mb-1.5 block tracking-wide">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="input-glass"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-500 mb-1.5 block tracking-wide">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="input-glass"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-500 mb-1.5 block tracking-wide">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project, opportunity, or just say hi..."
                    className="input-glass resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-electric mt-1 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right — Socials + info */}
          <div className="flex flex-col gap-6">
            {/* Info card */}
            <div className="glass-card rounded-3xl p-7">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                <span className="text-sm font-medium text-slate-300">Open to opportunities</span>
              </div>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                Currently seeking internships and project collaborations. Based in Indonesia — available for remote roles worldwide.
              </p>
              <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-600 font-medium uppercase tracking-wider mb-1">Response time</div>
                  <div className="text-sm text-slate-300 font-medium">Within 24 hours</div>
                </div>
                <div>
                  <div className="text-xs text-slate-600 font-medium uppercase tracking-wider mb-1">Timezone</div>
                  <div className="text-sm text-slate-300 font-medium">WIB (UTC+7)</div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="grid grid-cols-2 gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card rounded-2xl p-4 flex flex-col gap-2 transition-all duration-300 ${s.glow} group`}
                >
                  <div className={`text-slate-500 group-hover:scale-110 transition-all duration-300 ${s.color}`}>
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white/70">{s.label}</div>
                    <div className="text-xs text-slate-600 truncate">{s.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
