import { createTheme } from '@mui/material';
import { palette } from '../../palette';

export const muiTheme = createTheme({
    cssVariables: true,
    palette: {
        primary: {
            main: palette.primary,
        },
        secondary: {
            main: palette.secondary,
        },
    },
    components: {
        MuiAutocomplete: {
            styleOverrides: {
                root: 'padding: 0;',
                inputRoot: {
                    padding: 0,
                    fontSize: '0.8125rem',
                },
                option: {
                    fontSize: '0.8125rem',
                },
                // @ts-ignore
                padding: 0,
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontSize: '0.8125rem',
                },
            },
        },
        MuiFilledInput: {
            styleOverrides: {
                underline: {
                    '&:after': {
                        borderBottomWidth: '1px',
                    },
                },
                root: {
                    backgroundColor: 'transparent',
                    padding: 0,
                    fontSize: '0.8125rem',
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    padding: 0,
                    fontSize: '0.8125rem',
                },
            },
        },
    },
});
