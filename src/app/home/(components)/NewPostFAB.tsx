'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Typography } from '@/components/Typography';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { NewPostForm } from '@/app/home/(components)/NewPostForm';

// TODO display modal on click
export const NewPostFAB: React.FC = () => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const elRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (elRef.current) {
            const element = elRef.current;
            const onMouseEnter = () => {
                setIsMouseOver(true);
            };
            const onMouseLeave = () => {
                setIsMouseOver(false);
            };
            element.addEventListener('mouseenter', onMouseEnter);
            element.addEventListener('mouseleave', onMouseLeave);

            return () => {
                element?.removeEventListener('mouseenter', onMouseEnter);
                element?.removeEventListener('mouseleave', onMouseLeave);
            };
        }
    }, []);

    return (
        <Dialog>
            <DialogTrigger>
                <Button
                    ref={elRef}
                    className={cn(
                        isMouseOver ? 'w-[12rem]' : 'w-[4rem]',
                        'fixed bottom-[4rem] right-[4rem] overflow-hidden rounded-[2rem] h-[4rem] transition-[width] duration-200 z-20'
                    )}
                    variant={'secondary'}
                >
                    <Typography className={'text-[1.8rem]'}>💪</Typography>
                    {isMouseOver && (
                        <Typography className={'mt-[-3px] text-onSecondary'}>
                            Add a new flex!
                        </Typography>
                    )}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <Typography className={'text-center text-xl'}>
                            Add a new flex
                        </Typography>
                    </DialogTitle>
                    <DialogDescription>
                        <NewPostForm />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};
