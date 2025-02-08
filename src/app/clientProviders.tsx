'use client';
import React, { PropsWithChildren } from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { NextUIProvider } from '@nextui-org/react';
import { dark } from '@clerk/themes';
import { getCssVar, isDarkMode } from '@/util/media';

export const ClientProviders: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <ClerkProvider
            appearance={{
                ...(isDarkMode() ? { baseTheme: dark } : {}),
                variables: {
                    colorPrimary: getCssVar('--clr-secondary'),
                    colorText: getCssVar('--clr-text'),
                },
                elements: {
                    card: 'bg-card',
                },
            }}
        >
            {children}
        </ClerkProvider>
    );
};

export function NextUiProvider({ children }: { children: React.ReactNode }) {
    return <NextUIProvider>{children}</NextUIProvider>;
}
