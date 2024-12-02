/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#ff9000",
        bgColor: "#1e242d",
        seconBgColor: "#323946",
        whiteColor: "#ffffff",
        disabledColor: "#fff3",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
