import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';
import { palette } from './palette';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            logo: ['"Righteous"', 'sans-serif'],
            body: ['"Barlow"', 'sans-serif'],
            sans: ['"Barlow"', 'sans-serif'],
        },
        extend: {
            backgroundColor: {
                default: palette.primary,
                primary: palette.primary,
                primaryDimmed: palette.primaryDimmed,
                primaryDimmedHover: palette.primaryDimmedHover,
                secondary: palette.secondary,
                secondaryDimmed: palette.secondaryDimmed,
                page: palette.backgroundPage,
                card: palette.backgroundCard,
            },
            textColor: {
                default: palette.text,
                onPrimary: palette.textOnPrimary,
                accent: palette.primaryDimmed,
            },
        },
    },
    darkMode: 'class',
    plugins: [
        nextui({
            layout: {
                radius: {
                    medium: '0.375rem',
                },
            },
            themes: {
                dark: {
                    colors: {
                        focus: {
                            foreground: palette.primaryDimmed,
                            DEFAULT: palette.primaryDimmed,
                        },
                        primary: {
                            DEFAULT: palette.primary,
                            foreground: palette.textOnPrimary,
                        },
                    },
                },
            },
        }),
    ],
};
export default config;
