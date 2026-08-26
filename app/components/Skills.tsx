"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    emoji: "⚡",
    color: "blue",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL", "Bash"],
  },
  {
    title: "Frontend",
    emoji: "✦",
    color: "cyan",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion", "Redux"],
  },
  {
    title: "Backend & Cloud",
    emoji: "◈",
    color: "purple",
    skills: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB", "Docker", "AWS"],
  },
  {
    title: "CS Fundamentals",
    emoji: "◆",
    color: "green",
    skills: ["Data Structures", "Algorithms", "OS Concepts", "Networking", "Linear Algebra", "Statistics"],
  },
];

const colorMap: Record<string, string> = {
  blue: "",
  cyan: "cyan",
  purple: "purple",
  green: "green",
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0 }}
          className="mb-10 md:mb-12"
        >
          <div className="section-line mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              02 - Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="gradient-heading">Skills &amp; Technologies</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-lg text-base">
            A curated toolkit I&apos;ve built across my CS journey - from low-level systems to cloud-native development.
          </p>
        </motion.div>

        {/* Skill grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
            >
              <div className="glass-card rounded-3xl p-7 group h-full">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-lg">
                    {cat.emoji}
                  </div>
                  <h3 className="font-semibold text-white text-base tracking-wide">
                    {cat.title}
                  </h3>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-badge ${colorMap[cat.color]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="mt-12 flex items-center gap-4"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
