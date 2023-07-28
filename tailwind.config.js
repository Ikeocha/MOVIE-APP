/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",

  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        'sm': '640px',    // Custom screen size for small screens
        'md': '768px',    // Custom screen size for medium screens
        'lg': '1024px',   // Custom screen size for large screens
        'xl': '1280px',   // Custom screen size for extra-large screens
        'xxl': '1536px',  // Custom screen size for xxl screens
      },
    },
  }, 
  
  corePlugins: {
    preflight: false,
  },
  variants: {},
  plugins: [
    function ({ addUtilities }) {
      // ellipsis utility
      const ellipsisUtility = {
        display: '-webkit-box',
        '-webkit-line-clamp': '2',
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
      };

      // Register the ellipsis utility as a class
      addUtilities({ '.ellipsis': ellipsisUtility });
    },
  ]
};
