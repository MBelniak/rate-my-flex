import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Righteous', 'sans-serif'],
      sans2: ['Barlow', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#FFEE32',
        secondary: '#673DDB',
        secondary2: '#66529C',
        desert: '#868252',
        background: '#33322C',
        card: '#4D485C',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
