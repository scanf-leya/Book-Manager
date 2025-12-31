import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,js,jsx,html}"],

  theme: {
    extend: {
      colors: {
        /* Neutrals */
        white: "#FFFFFF",
        gray: {
          100: "#F3F3F5",
          200: "#E1E1E6",
          300: "#D1D5DC",
          400: "#717182",
          500: "#0A0A0A",
        },

        /* Brand */
        navy: {
          dark: "#211F42",
          low: "#030213",
        },

        /* Accent / feedback */
        red: {
          bright: "#D4183D",
        },

        yellow: {
          bright: "#FDC700",
          base: "#894B00",
          light: "#FEF9C2",
        },

        blue: {
          base: "#193CB8",
          light: "#DBEAFE",
        },

        green: {
          base: "#016630",
          light: "#DCFCE7",
        },

        /* Semantic tokens (shadcn) */
        background: "#FFFFFF",
        foreground: "#0A0A0A",

        card: "#FFFFFF",
        "card-foreground": "#0A0A0A",

        popover: "#FFFFFF",
        "popover-foreground": "#0A0A0A",

        primary: "#211F42",
        "primary-foreground": "#FFFFFF",

        secondary: "#F3F3F5",
        "secondary-foreground": "#0A0A0A",

        muted: "#E1E1E6",
        "muted-foreground": "#717182",

        accent: "#DBEAFE",
        "accent-foreground": "#193CB8",

        destructive: "#D4183D",
        "destructive-foreground": "#FFFFFF",

        border: "#E1E1E6",
        input: "#E1E1E6",
        ring: "#211F42",
      },

      borderRadius: {
        lg: "10px",
        md: "8px",
        sm: "6px",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      fontSize: {
        "heading-xl": ["24px", { lineHeight: "32px", fontWeight: "500" }],
        "heading-lg": ["18px", { lineHeight: "28px", fontWeight: "600" }],
        "heading-md": ["16px", { lineHeight: "24px", fontWeight: "600" }],

        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],

        action: ["14px", { lineHeight: "20px", fontWeight: "500" }],
        badge: ["12px", { lineHeight: "16px", fontWeight: "500" }],
      },

      boxShadow: {
        sm: "0 1px 2px rgb(0 0 0 / 5%)",
        md: "0 4px 6px rgb(0 0 0 / 10%)",
      },
    },
  },

  plugins: [],
};

export default config;
