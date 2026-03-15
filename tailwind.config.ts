import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#050505",
        "midnight-1": "#0a0a0f",
        "midnight-2": "#0d0d1a",
        "midnight-3": "#111120",
        slate: {
          850: "#1a1a2e",
          900: "#16213e",
          950: "#0f0f23",
        },
        electric: {
          DEFAULT: "#3b82f6",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          glow: "#4f9cf9",
          dim: "#1e3a5f",
        },
        glass: "rgba(255,255,255,0.04)",
        "glass-border": "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "space-gradient":
          "radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(147,51,234,0.06) 0%, transparent 50%), linear-gradient(to bottom, #050505 0%, #0a0a0f 100%)",
        "card-glass":
          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
        "electric-glow":
          "radial-gradient(ellipse at center, rgba(59,130,246,0.3) 0%, transparent 70%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
        "glass-hover": "0 16px 48px 0 rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
        electric: "0 0 20px rgba(59,130,246,0.4), 0 0 60px rgba(59,130,246,0.15)",
        "electric-sm": "0 0 10px rgba(59,130,246,0.3)",
        "card-hover": "0 24px 60px rgba(0,0,0,0.7), 0 0 30px rgba(59,130,246,0.1)",
        glow: "0 0 40px rgba(59,130,246,0.2)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "star-drift": "starDrift 20s linear infinite",
        "orbit": "orbit 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        starDrift: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "100%": { transform: "translateY(-100vh) translateX(20px)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
      },
      backdropBlur: {
        xs: "2px",
        glass: "16px",
      },
      borderRadius: {
        "2.5xl": "20px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
};
export default config;
