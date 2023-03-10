import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
  palette: {
    primary: {
        main: '#018790',
    },
    secondary: {
        main: '#E8DAD0',
    },
    accent: {
        main: '#DB504A'
    },
    text: {
        main: '#2B2726'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});