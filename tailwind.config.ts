import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            sans: ['Righteous', 'sans-serif'],
            sans2: ['Barlow', 'sans-serif'],
        },
        extend: {
            backgroundColor: {
                primary2: '#FFEE32',
                secondary: '#673DDB',
                secondary2: '#66529C',
                desert: '#868252',
                background2: '#33322C',
                card: '#4D485C',
            },
        },
    },
    plugins: [],
};
export default config;
