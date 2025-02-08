'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { DayPickerSingleProps } from 'react-day-picker';
import { Typography } from '../Typography';

export const DatePicker: React.FC<Omit<DayPickerSingleProps, 'mode'>> = ({
    ...calendarProps
}) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={'outline'}
                    className={cn(
                        'w-[280px] justify-start text-left capitalize',
                        !calendarProps.selected && 'text-muted-foreground'
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4 text-default" />
                    {calendarProps.selected ? (
                        format(calendarProps.selected, 'PPP')
                    ) : (
                        <Typography className="text-placeholder text-[0.875rem]">
                            Pick a date
                        </Typography>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar mode="single" {...calendarProps} />
            </PopoverContent>
        </Popover>
    );
};
