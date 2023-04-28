/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'carousel-initial': 'carousel_initial 20s linear infinite;',
        'carousel-next': 'carousel_next 20s linear infinite;',
        'carousel-initial-reverse': 'carousel_initial 25s linear infinite reverse;',
        'carousel-next-reverse': 'carousel_next 25s linear infinite reverse;',
        // 'move-right': 'move_right 6s linear infinite;',
      },
      keyframes: {
        carousel_initial: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(100vw, 0)' },
        },
        carousel_next: {
          '0%': { transform: 'translate(-200vw, 0)' },
          '100%': { transform: 'translate(-100vw, 0)' },
        },
        // move_right: {
        //   '0%': { transform: 'rotate(45deg) translate(-6rem, 6rem)' },
        //   '100%': { transform: 'rotate(45deg) translate(30px, -30px)' },
        // }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
