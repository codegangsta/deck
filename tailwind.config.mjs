/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        hd: "1280px",
        fhd: "1920px",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
