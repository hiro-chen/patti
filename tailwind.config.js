// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/swiper/**/*.{js,ts}", // ✅ 加入 Swiper 模組
  ],
  safelist: [
    "swiper",
    "swiper-wrapper",
    "swiper-slide",
    "swiper-button-next",
    "swiper-button-prev",
    "swiper-pagination",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
