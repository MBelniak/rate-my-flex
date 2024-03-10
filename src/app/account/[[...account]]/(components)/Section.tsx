import React, { PropsWithChildren } from 'react';

export const Section: React.FC<PropsWithChildren<{ sectionTitle: string }>> = ({
    sectionTitle,
    children,
}) => {
    return (
        <div className={'flex flex-col gap-2 w-full'}>
            <div className={'border-b-1 border-white/[0.06]'}>
                <h2 className={'leading-8'}>{sectionTitle}</h2>
            </div>
            {children}
        </div>
    );
};
