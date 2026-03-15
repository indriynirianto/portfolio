"use client";

import { useEffect, useRef, useState } from "react";

const ROLES = [
  "Computer Science Student",
  "Full-Stack Developer",
  "Problem Solver",
  "Algorithm Enthusiast",
  "Open Source Contributor",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    if (!isDeleting && displayed === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    } else {
      timeoutRef.current = setTimeout(
        () => {
          setDisplayed((prev) =>
            isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20"
    >
      {/* Ambient orbs */}
      <div className="orb w-[500px] h-[500px] bg-blue-600/10 top-1/4 -left-40 z-0" />
      <div className="orb w-[400px] h-[400px] bg-purple-600/8 bottom-1/4 -right-32 z-0" />
      <div className="orb w-[300px] h-[300px] bg-blue-400/6 top-1/2 left-1/2 -translate-x-1/2 z-0" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Greeting chip */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-card animate-float">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
          <span className="text-sm text-slate-300 font-medium tracking-wide">
            Available for opportunities
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight animate-fade-up">
          <span className="block text-white/90">Hi, I&apos;m</span>
          <span className="block mt-1 gradient-heading glow-text-subtle">
            Indriyani
          </span>
          <span className="block text-white/60 text-4xl sm:text-5xl md:text-6xl font-bold">
            Putri Dwi Irianto
          </span>
        </h1>

        {/* Typewriter subtitle */}
        <div className="h-8 mb-8 flex items-center justify-center">
          <p className="text-lg sm:text-xl text-blue-400 font-medium tracking-wide">
            {displayed}
            <span className="inline-block w-0.5 h-5 ml-0.5 bg-blue-400 animate-pulse align-middle" />
          </p>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-up" style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}>
          Passionate about crafting elegant solutions to complex problems. 
          I build performant, accessible, and beautiful digital experiences — 
          from algorithms to interfaces.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}>
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="btn-electric text-sm py-3 px-8 font-semibold text-base"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="glass-card px-8 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white transition-all hover:border-blue-500/30"
          >
            Get in Touch
          </a>
        </div>

        {/* Featured project mini-cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto w-full">
          {[
            {
              icon: "◈",
              title: "AlgoViz Studio",
              desc: "Algorithm visualizer with real-time animations",
              tag: "CS Tool",
              delay: "0s",
              color: "from-blue-600/20 to-indigo-600/10",
            },
            {
              icon: "✦",
              title: "EcoTrack",
              desc: "Full-stack sustainability tracking dashboard",
              tag: "Full Stack",
              delay: "0.4s",
              color: "from-green-600/15 to-teal-600/10",
            },
            {
              icon: "⚡",
              title: "NeuralNote",
              desc: "AI-powered note-taking with NLP tagging",
              tag: "AI / ML",
              delay: "0.8s",
              color: "from-purple-600/20 to-pink-600/10",
            },
          ].map((proj) => (
            /* Float wrapper — handles vertical drift only, no hover transform */
            <div
              key={proj.title}
              className="animate-float"
              style={{ animationDelay: proj.delay }}
            >
              {/* Inner card — handles hover elevation independently */}
              <div
                className={`
                  relative overflow-hidden rounded-2xl p-4 text-left cursor-default
                  bg-gradient-to-br from-white/[0.055] to-white/[0.01]
                  border border-white/[0.075]
                  backdrop-blur-[16px]
                  shadow-[0_8px_32px_rgba(0,0,0,0.5)]
                  transition-all duration-300 ease-out
                  hover:-translate-y-2 hover:border-blue-500/30
                  hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(59,130,246,0.12)]
                  group
                `}
              >
                {/* hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                <div className="relative z-10">
                  <div className="text-xl mb-2">{proj.icon}</div>
                  <div className="text-sm font-semibold text-white leading-snug">{proj.title}</div>
                  <div className="text-xs text-slate-500 mt-1 leading-relaxed">{proj.desc}</div>
                  <div className="mt-2 inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    {proj.tag}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator">
        <span className="text-xs text-slate-600 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-blue-500/50 to-transparent" />
      </div>
    </section>
  );
}
