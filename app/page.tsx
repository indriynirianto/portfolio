"use client";

import StarField from "./components/StarField";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";

export default function Home() {
  // Subtle parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const orbs = document.querySelectorAll<HTMLElement>(".orb");
      orbs.forEach((orb, i) => {
        const speed = i % 2 === 0 ? 0.08 : 0.05;
        orb.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-midnight">
      {/* Animated star field background */}
      <StarField />

      {/* Global ambient gradient */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 15% 40%, rgba(59,130,246,0.07) 0%, transparent 55%), radial-gradient(ellipse at 85% 10%, rgba(147,51,234,0.05) 0%, transparent 50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
