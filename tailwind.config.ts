import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing:{
        '200': '47em',
        '400': '36rem',
        '13': '3.3rem',
        '3.5': '15.3px',
        '100': '82.4dvh',
        '50': '23.5rem',
        '99': '21rem'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Norican: ["Norican"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}
export default config
