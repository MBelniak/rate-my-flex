import React, { PropsWithChildren } from 'react';

export const Card: React.FC<
    PropsWithChildren & React.HTMLAttributes<HTMLDivElement>
> = ({ children, ...props }) => {
    return (
        <div
            {...props}
            className={`flex-col rounded-[1rem] bg-card shadow-card p-[2.375rem+2rem+3rem] ${props.className}`}
        >
            {children}
        </div>
    );
};
