"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
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
          {["GitHub", "LinkedIn", "Email"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors font-medium"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
