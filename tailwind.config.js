module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#EBF5FF",
          100: "#E1EFFE",
          200: "#C3DDFD",
          300: "#A4CAFE",
          400: "#76A9FA",
          500: "#3F83F8",
          600: "#1C64F2",
          700: "#1A56DB",
          800: "#1E429F",
          900: "#233876",
          DEFAULT: "#3F83F8",
        },
        yellow: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
          DEFAULT: "#F59E0B",
        },
        // Nouvelle palette d'orange douce comme couleur principale
        orange: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
          800: "#9A3412",
          900: "#7C2D12",
          950: "#431407",
          DEFAULT: "#F97316",
          light: "#FDBA74",
          dark: "#C2410C",
        },
        // Couleur d'accent complémentaire (bleu-vert doux)
        teal: {
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
          950: "#042F2E",
          DEFAULT: "#14B8A6",
        },
        red: {
          DEFAULT: "#EF4444",
          500: "#EF4444",
        },
        green: {
          DEFAULT: "#10B981",
          500: "#10B981",
        },
        sky: {
          DEFAULT: "#0EA5E9",
          500: "#0EA5E9",
        },
        slate: {
          DEFAULT: "#475569",
          500: "#475569",
        },
        // Palette de gris anthracite
        anthracite: {
          50: "#f8f8f8",
          100: "#e5e5e5",
          200: "#cccccc",
          300: "#b0b0b0",
          400: "#8c8c8c",
          500: "#6f6f6f",
          600: "#525252",
          700: "#434343",
          800: "#383838",
          900: "#1f1f1f",

          DEFAULT: "#1f1f1f",
        },
        dark: {
          DEFAULT: "#1E293B",
          500: "#0F172A",
        },
        accent: {
          DEFAULT: "#F97316", // Mise à jour avec la couleur orange douce
          light: "#FDBA74", // Orange clair
          dark: "#C2410C", // Orange foncé
        },
        highlight: "#5EEAD4", // Mise à jour avec teal clair
        // Couleur ambre comme complément
        amber: {
          DEFAULT: "#F59E0B",
          light: "#FCD34D",
          dark: "#B45309",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Syne", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        "slide-left": "slideLeft 0.7s ease-out forwards",
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      boxShadow: {
        subtle: "0 0 15px rgba(0, 0, 0, 0.05)",
        "orange-glow": "0 0 15px rgba(249, 115, 22, 0.3)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        anthracite: {
          primary: "#F97316", // Changé pour orange principal
          secondary: "#14B8A6", // Teal complémentaire
          accent: "#FDBA74", // Orange clair
          "accent-orange": "#F97316", // Orange principal
          neutral: "#434343", // Anthracite moyen
          "base-100": "#1f1f1f", // Anthracite foncé - fond principal
          "base-200": "#121212", // Anthracite très foncé - fond secondaire
          "base-300": "#383838", // Anthracite clair
          info: "#5EEAD4", // Teal clair
          success: "#84cc16", // Vert lime
          warning: "#F59E0B", // Amber
          error: "#EA580C", // Orange foncé pour les erreurs
        },
      },
    ],
    darkTheme: "anthracite",
  },
};
