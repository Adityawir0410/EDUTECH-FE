import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          10: "#DAD8F8",
          30: "#C4BFF5",
          50: "#443DEE",
          70: "#3632B2",
          90: "#292585",
        },
        secondary: {
          10: "#FCDD77",
          30: "#FBC350",
          50: "#FFB13E",
          70: "#FFA953",
          90: "#FF8A62",
        },
        default: {
          10: "#E1E1E1",
          30: "#DDDDDD",
          50: "#D9D9D9",
          70: "#C3C3C3",
          90: "#AEAEAE",
        },
        success: {
          10: "#BEF8A2",
          30: "#80FA85",
          50: "#72F797",
          70: "#67E06B",
          90: "#5BC75F",
        },
        error: {
          10: "#FF8585",
          30: "#FF7676",
          50: "#F56767",
          70: "#E6595D",
          90: "#CC5252",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
