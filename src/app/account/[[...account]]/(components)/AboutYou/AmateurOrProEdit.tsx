import React, { Dispatch, SetStateAction, useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { ControlButtons } from './ControlButtons';

const options = [
    {
        value: 'amateur',
        label: 'an amateur',
    },
    {
        value: 'pro',
        label: 'a pro',
    },
];
export const AmateurOrProEdit: React.FC<{
    setIsEditing: Dispatch<SetStateAction<boolean>>;
}> = ({ setIsEditing }) => {
    const [value, setValue] = useState('');

    return (
        <div className={'flex flex-col gap-4'}>
            <Select onValueChange={setValue} defaultValue={value}>
                <SelectTrigger>
                    <SelectValue placeholder="Choose amateur or pro" />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => {
                        return (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        );
                    })}
                </SelectContent>
            </Select>
            <ControlButtons
                onCancel={(): void => setIsEditing(false)}
                onSave={(): void => setIsEditing(false)}
            />
        </div>
    );
};
