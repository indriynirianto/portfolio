"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  place: string;
  period: string;
  desc: string;
}

// EXPERIENCE: data asli Indriyani. Isi [Nama Institusi] dan [Tahun] dengan detail course. Cek ulang tahun project.
const experiences: ExperienceItem[] = [
  {
    role: "Full-Stack AI Project Developer",
    place: "Lore-AI",
    period: "2025",
    desc: "Mengembangkan aplikasi web rekomendasi parfum berbasis kepribadian pengguna dengan integrasi Groq AI, arsitektur backend PHP dan database MySQL, serta panel admin katalog.",
  },
  {
    role: "Full-Stack Developer (Project)",
    place: "Hobby Match",
    period: "2025",
    desc: "Membangun platform interaksi sosial berbasis minat dengan fitur pencocokan profil, real-time messaging, dan komunikasi audio/video menggunakan React, Node.js, dan Socket.io.",
  },
  {
    role: "Frontend Developer (Campus Project)",
    place: "Sahabat Cafe",
    period: "2024 - 2025",
    desc: "Kolaborasi tim semester awal dalam merancang dan mengembangkan website resmi kafe kampus dekat President University menggunakan HTML, CSS, dan JavaScript interaktif.",
  },
  {
    // Placeholder institusi & tahun untuk pelatihan / sertifikasi AI
    role: "Peserta Program dan Sertifikasi AI",
    place: "[Nama Institusi]",
    period: "[Tahun]",
    desc: "Menyelesaikan pelatihan dan sertifikasi bidang Artificial Intelligence (Perempuan Inovasi Artificial) yang berfokus pada inovasi teknologi AI dan implementasi solusi digital cerdas.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 overflow-hidden">
      {/* Decorative orbs */}
      <div className="orb w-[420px] h-[420px] -top-20 -left-32 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="orb w-[360px] h-[360px] bottom-0 -right-24 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto min-w-0">
        {/* Section Header (Fade-up delay: 0s) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0 }}
          className="mb-14 md:mb-16"
        >
          <div className="section-line mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              01 — ABOUT ME
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="gradient-heading">Kenalan dulu, yuk.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10 md:gap-12 items-start">
          {/* Photo & IG Pill Column (Fade-up delay: 0.2s) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative group w-full max-w-[240px] sm:max-w-[260px] mx-auto md:mx-0 md:max-w-none min-w-0"
          >
            {/* Soft ambient glow behind photo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-3xl blur-xl opacity-40 group-hover:opacity-80 transition duration-500 pointer-events-none" />

            {/* Photo frame with glassmorphism & fixed 3/4 aspect ratio */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl aspect-[3/4] w-full">
              <Image
                src="/foto-indri.jpg"
                alt="Foto profil Indriyani Putri Dwi Irianto - Computer Science Student & Web Developer"
                width={400}
                height={533}
                className="w-full h-full object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-500"
                priority={false}
              />
            </div>

            {/* Instagram pill with >=44px touch target, blue glow & accessibility */}
            <a
              href="https://instagram.com/_indryni._"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kunjungi profil Instagram Indriyani Putri Dwi Irianto @_indryni._"
              className="mt-4 w-full min-h-[44px] flex items-center justify-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-all duration-300 active:scale-[0.98]"
            >
              <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@_indryni._</span>
            </a>
          </motion.div>

          {/* Right Column: Bio + Quick Facts + Experience */}
          <div className="space-y-10 min-w-0">
            {/* Bio (Fade-up delay: 0.2s) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-5 text-white leading-snug">
                Computer Science student yang suka bikin hal-hal keren dari nol. 👩‍💻
              </h3>

              <div className="space-y-4 text-slate-300 leading-relaxed text-base">
                <p>
                  Halo, saya <span className="text-white font-medium">Indriyani Putri Dwi Irianto</span>, mahasiswi
                  Computer Science di President University yang berfokus pada pengembangan aplikasi web modern,
                  mencakup antarmuka frontend hingga arsitektur backend. Saya memiliki dedikasi tinggi dalam
                  memecahkan masalah komputasi dan membangun solusi digital yang efisien serta andal.
                </p>
                <p>
                  Saat ini saya aktif mendalami <span className="text-white font-medium">React, Next.js, dan TypeScript</span> melalui
                  berbagai proyek yang dipublikasikan secara berkala di GitHub. Selain penulisan kode yang terstruktur,
                  saya juga memiliki minat kuat pada desain UI/UX untuk memastikan setiap aplikasi menghadirkan antarmuka
                  yang intuitif dan pengalaman pengguna yang optimal.
                </p>
                <p>
                  Saya selalu antusias untuk mempelajari teknologi baru, memperluas wawasan rekayasa perangkat lunak,
                  serta berkolaborasi dalam proyek dan kesempatan profesional. Silakan terhubung lebih lanjut melalui
                  tautan yang tersedia.
                </p>
              </div>
            </motion.div>

            {/* Quick facts (Fade-up delay: 0.4s) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="grid grid-cols-3 gap-2.5 sm:gap-3 md:gap-4"
            >
              {[
                { label: "LOKASI", value: "Indonesia", isStatus: false },
                { label: "FOKUS", value: "Web Dev", isStatus: false },
                { label: "STATUS", value: "Open to Opp.", isStatus: true },
              ].map((f) => (
                <div
                  key={f.label}
                  className="glass-card rounded-2xl p-3.5 sm:p-4 flex flex-col justify-center border border-white/10 hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300"
                >
                  <div className="text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase">
                    {f.label}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm md:text-base font-semibold text-white flex items-center gap-1.5 sm:gap-2">
                    {f.isStatus && (
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                      </span>
                    )}
                    <span className="truncate">{f.value}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Education (Fade-up delay: 0.5s) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                <h3 className="text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase">
                  EDUCATION
                </h3>
              </div>

              <div className="glass-card rounded-2xl p-5 md:p-6 border border-white/10 hover:border-blue-500/30 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h4 className="text-white font-semibold text-base md:text-lg">
                      S1 Computer Science
                    </h4>
                    <span className="project-tag shadow-[0_0_10px_rgba(59,130,246,0.15)]">
                      President University
                    </span>
                  </div>
                  <span className="font-mono text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                    2025 - Sekarang
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mt-3">
                  Lagi nempuh S1 Computer Science di President University — fokus
                  bikin aplikasi web modern dari frontend sampai backend, sambil
                  eksplor AI, algoritma, dan UI/UX design lewat project-project
                  kuliah yang seru.
                </p>
              </div>
            </motion.div>

            {/* Experience timeline (Fade-up delay: 0.6s) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
              className="pt-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                <h3 className="text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase">
                  EXPERIENCE
                </h3>
              </div>

              {/* Timeline line with electric border glow */}
              <div className="relative pl-6 md:pl-8 border-l border-blue-500/30 shadow-[0_0_12px_rgba(59,130,246,0.15)] space-y-6">
                {experiences.map((exp) => (
                  <div key={exp.role} className="relative group">
                    {/* Glowing electric blue node precisely centered on line */}
                    <span className="absolute -left-6 md:-left-8 top-7 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20 shadow-[0_0_12px_rgba(59,130,246,0.6)] group-hover:scale-125 group-hover:bg-blue-400 group-hover:shadow-[0_0_16px_rgba(59,130,246,0.9)] transition-all duration-300 z-10" />

                    {/* Glass card entry */}
                    <div className="glass-card rounded-2xl p-5 md:p-6 border border-white/10 hover:border-blue-500/30 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h4 className="text-white font-semibold text-base md:text-lg group-hover:text-blue-200 transition-colors">
                            {exp.role}
                          </h4>
                          <span className="project-tag shadow-[0_0_10px_rgba(59,130,246,0.15)] hover:shadow-[0_0_14px_rgba(59,130,246,0.35)] transition-all duration-300">
                            {exp.place}
                          </span>
                        </div>
                        <span className="font-mono text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed mt-3">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


