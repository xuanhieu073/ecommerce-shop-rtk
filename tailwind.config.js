/** @type {import('tailwindcss').Config} */
export default {
  content: ['src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url(/bg_hero.svg)',
      },
    },
  },
  plugins: [],
};
