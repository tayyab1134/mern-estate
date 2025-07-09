/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"], // Adjust based on your project structure
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
    ],
  };
