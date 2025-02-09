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
                primaryHover: palette.primaryHover,
                primaryBackgroundHover: palette.primaryBackgroundHover,
                secondary: palette.secondary,
                secondaryHover: palette.secondaryHover,
                secondaryBackgroundHover: palette.secondaryBackgroundHover,
                page: palette.backgroundPage,
                card: palette.backgroundCard,
                cardHover: palette.backgroundCardHover,
            },
            textColor: {
                default: palette.text,
                onPrimary: palette.textOnPrimary,
                onSecondary: palette.textOnSecondary,
                secondary: palette.secondary,
                accent: palette.primaryHover,
                placeholder: 'rgb(163 163 163)',
            },
            boxShadow: {
                card: 'rgba(0, 0, 0, 0.16) 0px 24px 48px',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            borderColor: {
                default: palette.border,
                focus: palette.borderFocus,
            },
            colors: {},
        },
    },
    //https://mui.com/material-ui/integrations/interoperability/#tailwind-css
    important: '#__next',
    darkMode: ['media', 'class'],
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
                        primary: {
                            DEFAULT: palette.primary,
                            foreground: palette.textOnPrimary,
                        },
                    },
                },
                light: {
                    colors: {
                        primary: {
                            DEFAULT: palette.primary,
                            foreground: palette.textOnPrimary,
                        },
                    },
                },
            },
        }),
        require('tailwindcss-animate'),
    ],
};
export default config;
