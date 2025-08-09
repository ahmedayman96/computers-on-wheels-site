import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#0e2a47", light: "#153b66", accent: "#1dd3b0", muted: "#f5f7fb" }
      }
    },
  },
  plugins: [],
} satisfies Config;
