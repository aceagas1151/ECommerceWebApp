
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ fixed
import { RouterProvider } from 'react-router-dom';
import { router } from './app/routes/Routes';

const theme = createTheme();

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <RouterProvider router = {router} />
    </ThemeProvider>
  </React.StrictMode>
);
