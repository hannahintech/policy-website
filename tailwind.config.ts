import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        fair: '#00a85a', // Fair Green
        forest: '#00643b', // Forest Green
        strong: '#28aa1e', // Strong Green
        lime: '#97d700', // Lime Green
        teal: '#00606a', // Teal
        red: '#df1317',
        blush: '#ff8a8c',
        dark: '#333333',
        black: '#231f20',
        white: '#ffffff',
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
}

export default config satisfies Config
