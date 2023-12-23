import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#f5f5f5',
          bg: '#ffedbc',
          color: '#333333',
          mainBtn: '#c8b39e',
          secondaryBtn: '#ffffa1',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#f5f5f5',
          bg: '#5c5c5c',
          color: '#ffffff',
          mainBtn: '#252841',
          secondaryBtn: '#847a86',
        },
      },
    },
  },
});
