import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080A12",
        violetMist: "#C770F0",
        mintGlass: "#58E6C6",
        amberSoft: "#F7C873",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(199, 112, 240, 0.18)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease both",
        "soft-pulse": "softPulse 2.4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(18px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        softPulse: {
          "0%, 100%": {
            opacity: "0.55",
          },
          "50%": {
            opacity: "1",
          },
        },
        wave: {
          "0%, 60%, 100%": {
            transform: "rotate(0deg)",
          },
          "10%, 30%": {
            transform: "rotate(14deg)",
          },
          "20%": {
            transform: "rotate(-8deg)",
          },
          "40%": {
            transform: "rotate(-4deg)",
          },
          "50%": {
            transform: "rotate(10deg)",
          },
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".blog-content": {
          color: "rgba(255,255,255,0.78)",
          fontSize: "1.05rem",
          lineHeight: "1.9",
        },
        ".blog-content h2": {
          color: "#fff",
          fontSize: "1.8rem",
          fontWeight: "800",
          marginTop: "2.8rem",
          marginBottom: "1rem",
        },
        ".blog-content h3": {
          color: "#fff",
          fontSize: "1.35rem",
          fontWeight: "750",
          marginTop: "2rem",
          marginBottom: "0.8rem",
        },
        ".blog-content p": {
          marginBottom: "1.35rem",
        },
        ".blog-content a": {
          color: "#58E6C6",
          textDecoration: "none",
        },
        ".blog-content img": {
          width: "100%",
          height: "auto",
          borderRadius: "1rem",
          margin: "1.75rem 0",
        },
        ".blog-content blockquote": {
          borderLeft: "3px solid #C770F0",
          background: "rgba(199,112,240,0.08)",
          borderRadius: "0 0.85rem 0.85rem 0",
          margin: "2rem 0",
          padding: "1rem 1.25rem",
        },
        ".blog-content pre": {
          overflowX: "auto",
          borderRadius: "1rem",
          background: "#070912",
          padding: "1.1rem",
        },
      });
    },
  ],
};

export default config;
