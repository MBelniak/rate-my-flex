import React, { PropsWithChildren } from 'react';

export type TypographyVariant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'label';

export const Typography: React.FC<
    PropsWithChildren & {
        variant?: TypographyVariant;
        htmlFor?: string | undefined;
    } & React.HTMLAttributes<HTMLSpanElement>
> = ({ variant, children, htmlFor, ...rest }) => {
    switch (variant) {
        case 'h1':
            return (
                <h1
                    {...rest}
                    className={`text-[2rem] font-medium font-logo text-default ${rest.className ?? ''}`}
                >
                    {children}
                </h1>
            );
        case 'h2':
            return (
                <h2
                    {...rest}
                    className={`text-[1.5rem] font-body text-default ${rest.className ?? ''}`}
                >
                    {children}
                </h2>
            );
        case 'h3':
            return (
                <h3
                    {...rest}
                    className={`text-[1rem] font-body text-default ${rest.className ?? ''}`}
                >
                    {children}
                </h3>
            );
        case 'h4':
            return (
                <h4
                    {...rest}
                    className={`text-[1rem] font-body text-default ${rest.className ?? ''}`}
                >
                    {children}
                </h4>
            );
        case 'h5':
            return (
                <h5
                    {...rest}
                    className={`text-[1rem] font-body text-default ${rest.className ?? ''}`}
                >
                    {children}
                </h5>
            );

        case 'h6':
            return (
                <h6
                    {...rest}
                    className={`text-[1rem] font-body text-default ${rest.className ?? ''}`}
                >
                    {children}
                </h6>
            );
        case 'body2':
            return (
                <p
                    {...rest}
                    className={`text-[0.8125rem] font-body text-secondary ${rest.className ?? ''}`}
                >
                    {children}
                </p>
            );
        case 'label':
            return (
                <label
                    {...rest}
                    className={`text-[1rem] font-body font-medium text-default ${rest.className ?? ''}`}
                >
                    {children}
                </label>
            );
        case 'body1':
        default:
            return (
                <p
                    {...rest}
                    className={`text-[1rem] font-body text-default ${rest.className ?? ''}`}
                >
                    {children}
                </p>
            );
    }
};
