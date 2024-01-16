import { createTheme } from '@mui/material/styles';
import cores from './cores.css'

// Suponha que você tenha definido --secondary-color no seu arquivo CSS
const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color');

const theme = createTheme({
    palette: {
        primary: {
            main: secondaryColor,
        },
        secondary: {
            main: primaryColor,
        },
        info: {
            main: accentColor,
        },
    },
});

export default theme;
