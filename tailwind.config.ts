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
                darkPrimary: palette.darkPrimary,
                primaryHover: palette.primaryHover,
                darkPrimaryHover: palette.darkPrimaryHover,
                primaryBackgroundHover: palette.primaryBackgroundHover,
                secondary: palette.secondary,
                secondaryHover: palette.secondaryHover,
                secondaryBackgroundHover: palette.secondaryBackgroundHover,
                page: palette.backgroundPage,
                darkPage: palette.darkBackgroundPage,
                card: palette.backgroundCard,
                darkCard: palette.darkBackgroundCard,
            },
            textColor: {
                default: palette.text,
                onPrimary: palette.textOnPrimary,
                secondary: palette.secondary,
                accent: palette.primaryHover,
            },
            boxShadow: {
                card: 'rgba(0, 0, 0, 0.16) 0px 24px 48px',
            },
        },
    },
    //https://mui.com/material-ui/integrations/interoperability/#tailwind-css
    important: '#__next',
    darkMode: 'media',
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
                            DEFAULT: palette.darkPrimary,
                            foreground: palette.darkTextOnPrimary,
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
    ],
};
export default config;
