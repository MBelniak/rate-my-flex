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
                    fontSize: '0.8125rem',
                },
                option: {
                    '&:hover': {
                        backgroundColor: 'rgba(102, 82, 156, 0.4)',
                    },
                    fontSize: '0.8125rem',
                },
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
