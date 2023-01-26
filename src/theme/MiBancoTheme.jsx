import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const miBancoTheme = createTheme({
    palette: {
        primary: {
            main: '#c14e00',
        },
        secondary: {
            main: '#fff',
        },
        grey: {
            main: '#67757c',
        },
        error: {
            main: red.A400,
        },
    }
});