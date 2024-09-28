import { createTheme } from '@mui/material';
import { palette } from '../../palette';

export const muiTheme = createTheme({
    palette: {
        primary: {
            main: palette.primary,
            dark: palette.darkPrimary,
        },
        secondary: {
            main: palette.secondary,
            dark: palette.darkSecondary,
        },
    },
    typography: {
        h1: {
            color: 'var(--clr-text)',
            fontSize: '2rem',
        },
        body1: {
            color: 'var(--clr-text)',
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    color: 'var(--clr-text-on-primary)',
                },
            },
        },
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
