import React, { Dispatch, SetStateAction, useState } from 'react';
import { Section } from '@/app/account/[[...account]]/(components)/Section';
import {
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { Button } from '@nextui-org/react';

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
            <div className={'flex flex-row-reverse gap-2 content-end w-full'}>
                <Button
                    color="primary"
                    variant={'solid'}
                    className={'uppercase'}
                >
                    Save
                </Button>
                <Button
                    color="primary"
                    variant={'light'}
                    className={'uppercase'}
                    onClick={() => setIsEditing(false)}
                >
                    Cancel
                </Button>
            </div>
        </div>
    );
};
