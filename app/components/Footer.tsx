"use client";

import { motion } from "framer-motion";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/indriynirianto", external: true },
  { label: "LinkedIn", href: "https://linkedin.com", external: true },
  { label: "Instagram", href: "https://instagram.com/_indryni._", external: true },
  { label: "Email", href: "mailto:indrynirianto@gmail.com", external: false },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-8 sm:py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-electric-sm">
            <span className="text-white font-bold text-xs">I</span>
          </div>
          <span className="text-sm text-slate-600 font-medium">Indriyani Putri Dwi Irianto</span>
        </div>

        <p className="text-xs text-slate-700 text-center">
          © {year} · Built with Next.js &amp; Tailwind · Theme: Antigravity ✦
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
