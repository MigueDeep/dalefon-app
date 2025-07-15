// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6c39ee',
      contrastText: '#ffffff', 
    },
    secondary: {
      main: '#ff28de',
      contrastText: '#ffffff',
    },
    accent: {
      main: '#00f7fd',
      contrastText: '#000000',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none', 
        },
      },
    },
  },
});

export default theme;