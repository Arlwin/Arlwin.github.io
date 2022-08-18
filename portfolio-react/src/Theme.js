import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
  palette: {
    primary: {
        main: '#E5E5E5',
    },
    secondary: {
        main: '#14213D',
    },
    accent: {
        main: '#FCA311'
    },
    text: {
        main: '#FFFFFF'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});