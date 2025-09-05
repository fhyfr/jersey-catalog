/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        'heading': ['Playfair Display', 'serif'],
      },
      colors: {
        // Modern Brand Colors untuk Jersey Catalog
        brand: {
          primary: '#E11D48',    // Modern Rose Red
          secondary: '#1F2937',  // Dark Gray (bukan hitam total)
          accent: '#FFFFFF',     // White
          text: '#374151',       // Softer Gray untuk text
          gold: '#F59E0B',       // Modern Amber/Gold
          muted: '#6B7280',      // Muted Gray
          light: '#F9FAFB',      // Very Light Gray
          success: '#10B981',    // Modern Green
        },
        gradient: {
          'from': '#E11D48',
          'to': '#F97316',
        }
      },
      backgroundImage: {
        'gradient-modern': 'linear-gradient(135deg, #E11D48 0%, #F97316 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1F2937 0%, #374151 100%)',
        'gradient-light': 'linear-gradient(135deg, #F9FAFB 0%, #E5E7EB 100%)',
      },
      boxShadow: {
        'modern': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'inner-light': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
