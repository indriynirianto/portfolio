"use client";

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
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="section-line mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              02 — Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="gradient-heading">Skills &amp; Technologies</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-lg text-base">
            A curated toolkit I&apos;ve built across my CS journey — from low-level systems to cloud-native development.
          </p>
        </div>

        {/* Skill grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="glass-card rounded-3xl p-7 group"
            >
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
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
