"use client";

import { useState } from "react";

const projects = [
  {
    title: "AlgoViz Studio",
    description:
      "An interactive algorithm visualization platform. Watch Dijkstra, BFS, DFS, and sorting algorithms come to life with step-by-step animations and real-time complexity analysis.",
    tags: ["React", "TypeScript", "Canvas API", "Algorithms"],
    category: "CS Tool",
    link: "#",
    gradient: "from-blue-600/20 to-indigo-600/10",
    icon: "◈",
    featured: true,
  },
  {
    title: "EcoTrack Dashboard",
    description:
      "Full-stack sustainability tracking app with real-time data visualization. Users can monitor their carbon footprint with beautiful charts and personalized reduction insights.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Chart.js"],
    category: "Full Stack",
    link: "#",
    gradient: "from-green-600/15 to-teal-600/10",
    icon: "✦",
    featured: true,
  },
  {
    title: "NeuralNote",
    description:
      "AI-powered note-taking application that uses NLP to automatically tag, summarize, and link related concepts across your knowledge base.",
    tags: ["Python", "spaCy", "React", "MongoDB"],
    category: "AI / ML",
    link: "#",
    gradient: "from-purple-600/20 to-pink-600/10",
    icon: "⚡",
    featured: true,
  },
  {
    title: "ByteChat",
    description:
      "Real-time messaging platform with end-to-end encryption, file sharing, and WebRTC-based video calls. Built with performance-first principles.",
    tags: ["Socket.io", "Node.js", "WebRTC", "Redis"],
    category: "Backend",
    link: "#",
    gradient: "from-cyan-600/15 to-blue-600/10",
    icon: "◆",
    featured: false,
  },
  {
    title: "OS Scheduler Sim",
    description:
      "A CPU scheduling algorithm simulator for OS education — simulates FCFS, SJF, Round Robin, and Priority scheduling with Gantt charts and metrics.",
    tags: ["C++", "Python", "Matplotlib"],
    category: "Systems",
    link: "#",
    gradient: "from-orange-600/15 to-red-600/10",
    icon: "◉",
    featured: false,
  },
  {
    title: "PortfolioOS",
    description:
      "A macOS-inspired portfolio web experience built from scratch. Features a working desktop, draggable windows, and interactive apps.",
    tags: ["React", "Tailwind", "Framer Motion"],
    category: "Creative Dev",
    link: "#",
    gradient: "from-slate-600/15 to-slate-800/10",
    icon: "⊕",
    featured: false,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Full Stack", "AI / ML", "CS Tool", "Backend", "Systems", "Creative Dev"];

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-28 px-6">
      {/* Ambient orb */}
      <div className="orb w-[500px] h-[500px] bg-blue-600/6 top-0 right-0 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="section-line mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              03 — Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="gradient-heading">Selected Projects</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-lg text-base">
            A showcase of what I&apos;ve built — ranging from systems-level simulators to full-stack applications.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-blue-500 text-white shadow-electric-sm"
                  : "glass-card text-slate-400 hover:text-white hover:border-blue-500/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className={`glass-card rounded-3xl overflow-hidden group relative flex flex-col ${
                project.featured ? "" : ""
              }`}
            >
              {/* Card gradient top */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`}
              />

              <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-white/8 to-white/2 border border-white/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="project-tag">{project.category}</span>
                    {project.featured && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/25 text-blue-400">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-200 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-lg bg-white/4 border border-white/6 text-slate-400 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow link */}
                <div className="flex items-center gap-1.5 text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  View project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 glass-card px-6 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
