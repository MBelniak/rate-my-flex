import { createTheme } from '@mui/material';

export const muiTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#673DDB',
            dimmed: '#66529C',
        },
    },
    typography: {
        body1: {
            color: 'white',
        },
    },
    components: {
        MuiAutocomplete: {
            styleOverrides: {
                root: 'padding: 0;',
                inputRoot: {
                    padding: 0,
                },
                option: {
                    '&:hover': {
                        backgroundColor: 'rgba(102, 82, 156, 0.4)',
                    },
                },
                padding: 0,
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
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: 'padding: 0;',
            },
        },
    },
});
