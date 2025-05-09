import React from 'react'
// Removed unused ReactDOM import
// import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { createRoot } from 'react-dom/client';
import App from './App'
import './index.css'
import { ThemeProvider as CustomThemeProvider } from './contexts/theme';

const theme = createTheme({
  // ...custom theme settings if needed...
})

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <CustomThemeProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </CustomThemeProvider>
);

