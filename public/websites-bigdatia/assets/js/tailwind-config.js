tailwind.config = {
  theme: {
    extend: {
      colors: {
        bgDark: '#0b0f19',
        cardDark: '#162032',
        accent: '#deff9a',
        textLight: '#f8fafc',
        brandBlue: '#2563eb', 
        brandIndigo: '#4f46e5',
      },
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  }
}
