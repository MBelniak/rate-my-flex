import React, { Dispatch, SetStateAction, useState } from 'react';
import {
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import { ControlButtons } from '@/app/account/[[...account]]/(components)/AboutYou/ControlButtons';

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

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
    };

    return (
        <div className={'flex flex-col gap-4'}>
            <FormControl
                variant="standard"
                sx={{ maxWidth: '200px', minWidth: '120px' }}
            >
                <Select value={value} onChange={handleChange}>
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <ControlButtons
                onCancel={(): void => setIsEditing(false)}
                onSave={(): void => setIsEditing(false)}
            />
        </div>
    );
};
