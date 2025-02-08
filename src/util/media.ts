'use client';

export const isDarkMode = (): boolean =>
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

export const getCssVar = (cssVar: string): string =>
    typeof window !== 'undefined'
        ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(cssVar) ?? ''
        : '';
