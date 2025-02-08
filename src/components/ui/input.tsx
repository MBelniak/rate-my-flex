import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<
    HTMLInputElement,
    React.ComponentProps<'input'> & { helperText?: React.ReactNode }
>(({ className, type, helperText, ...props }, ref) => {
    return (
        <div className="flex-col gap-1">
            <input
                type={type}
                className={cn(
                    'flex h-9 w-full rounded-md border border-default bg-card hover:bg-cardHover px-3 py-1 text-default shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:file:text-neutral-50 placeholder:text-placeholder dark:focus-visible:ring-neutral-300',
                    className
                )}
                ref={ref}
                {...props}
            />
            {helperText}
        </div>
    );
});
Input.displayName = 'Input';

export { Input };
