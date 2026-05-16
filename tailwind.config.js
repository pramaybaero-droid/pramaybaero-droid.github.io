/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          50: "#f6f6f4",
          100: "#e7e5df",
          200: "#cfcac0",
          300: "#aaa397",
          400: "#7d766c",
          500: "#5e574f",
          600: "#49433d",
          700: "#35312d",
          800: "#252320",
          900: "#171614"
        },
        sand: {
          50: "#fbf7ec",
          100: "#f2e5c2",
          200: "#e4c67d",
          300: "#cea047",
          400: "#ac7d2e",
          500: "#7f5c27"
        },
        research: {
          blue: "#416f8f",
          cyan: "#4f9ca7",
          ink: "#17202a"
        }
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"]
      },
      boxShadow: {
        soft: "0 20px 50px -34px rgba(23, 22, 20, 0.45)"
      }
    }
  },
  plugins: []
};
