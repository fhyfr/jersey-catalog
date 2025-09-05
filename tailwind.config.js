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
        // EPL-inspired fonts (Axiforma alternatives)
        'sans': ['Nunito Sans', 'Work Sans', 'system-ui', 'sans-serif'],
        'axiforma': ['Nunito Sans', 'Work Sans', 'system-ui', 'sans-serif'],
        'epl-heading': ['Work Sans', 'DM Sans', 'system-ui', 'sans-serif'],
        'epl-body': ['Public Sans', 'DM Sans', 'system-ui', 'sans-serif'],
        'sport-numbers': ['Manrope', 'Work Sans', 'monospace'],
        'display': ['Work Sans', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        // EPL-inspired color palette
        brand: {
          primary: '#37003C',      // EPL Purple (Primary brand color)
          secondary: '#00FF85',    // EPL Cyan/Green (Accent color)  
          accent: '#FFFFFF',       // White
          text: '#1A1A1A',         // Deep Black for text
          gold: '#E90052',         // EPL Pink/Magenta
          muted: '#6B7280',        // Muted Gray
          light: '#F8FAFC',        // Very Light Gray
          success: '#00FF85',      // EPL Cyan
          purple: '#37003C',       // EPL Deep Purple
          pink: '#E90052',         // EPL Pink
          cyan: '#00FF85',         // EPL Cyan
        },
        // EPL gradient combinations
        gradient: {
          'primary': '#37003C',
          'secondary': '#E90052',
          'accent': '#00FF85',
        }
      },
      backgroundImage: {
        'gradient-epl': 'linear-gradient(135deg, #37003C 0%, #E90052 50%, #00FF85 100%)',
        'gradient-epl-primary': 'linear-gradient(135deg, #37003C 0%, #5D1049 100%)',
        'gradient-epl-accent': 'linear-gradient(135deg, #E90052 0%, #00FF85 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1A1A1A 0%, #374151 100%)',
        'gradient-light': 'linear-gradient(135deg, #F8FAFC 0%, #E5E7EB 100%)',
      },
      boxShadow: {
        'epl': '0 10px 25px -3px rgba(55, 0, 60, 0.1), 0 4px 6px -2px rgba(55, 0, 60, 0.05)',
        'epl-strong': '0 20px 25px -5px rgba(55, 0, 60, 0.2), 0 10px 10px -5px rgba(55, 0, 60, 0.1)',
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
      },
      letterSpacing: {
        'tighter': '-0.02em',
        'tight': '-0.01em',
      },
      lineHeight: {
        'extra-tight': '1.1',
        'tight': '1.25',
      }
    },
  },
  plugins: [],
}
