import { Typography } from '@/components/Typography';
import React, { PropsWithChildren } from 'react';

export const Section: React.FC<PropsWithChildren<{ sectionTitle: string }>> = ({
    sectionTitle,
    children,
}) => {
    return (
        <section className={'flex flex-col gap-2 w-full'}>
            <header className={'border-b-1 border-white/[0.1]'}>
                <Typography className={'leading-8 text-lg'}>
                    {sectionTitle}
                </Typography>
            </header>
            {children}
        </section>
    );
};
