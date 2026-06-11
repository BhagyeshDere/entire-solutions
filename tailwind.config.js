/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // Defining your logo's specific colors
        brand: {
          pink: '#ec4899', // Matches your logo pink
          cyan: '#22d3ee', // Matches your logo cyan
        },
      },
      fontFamily: {
        // Add your preferred professional font here (e.g., Inter)
        sans: ['Inter', 'sans-serif'], 
      },
      backgroundImage: {
        // A reusable gradient for buttons and headers
        'brand-gradient': 'linear-gradient(to right, #ec4899, #22d3ee)',
      },
    },
  },
}