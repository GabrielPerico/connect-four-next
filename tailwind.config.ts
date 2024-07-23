import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      colors: {
        purple: {
          300: "#5C2DD5",
          400: "#7945FF",
        },

        red: {
          400: "#FD6687",
        },

        yellow: {
          400: "#FFCE67",
        },
      },

      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
    },

    heading: {
      xs: {
        fontSize: "1rem",
        fontWeight: "700",
      },
      s: {
        fontSize: "1.25rem",
        fontWeight: "700",
      },
      m: {
        fontSize: "1.5rem",
        fontWeight: "700",
      },
      l: {
        fontSize: "3.5rem",
        fontWeight: "700",
      },
    },
  },

  plugins: [
    plugin(function ({ addComponents, theme, matchUtilities, addVariant }) {
      addComponents({
        ".no-outline-shadow": {
          filter: "drop-shadow(0px 6px 0px black)",
        },

        ".default-shadow": {
          outline: "4px solid black",
          filter: "drop-shadow(0px 10px 0px black)",
        },
        ".hover-shadow": {
          outline: `4px solid ${theme("colors.purple.300")}`,
          filter: `drop-shadow(0px 10px 0px ${theme("colors.purple.300")})`,
        },
        ".allow-discrete": {
          transitionBehavior: "allow-discrete",
        },
      });

      matchUtilities(
        {
          heading: (value) => value,
        },
        {
          values: theme("heading"),
        },
      );

      addVariant("starting", "@starting-style");
    }),
  ],
};
export default config;
