import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  type PaletteMode
} from '@mui/material';
import type { Theme } from '@mui/material/styles';

// Add "gray" to palette types
// Extend palette with 'gray'
declare module '@mui/material/styles' {
  interface Palette {
    gray: Palette['primary'];
  }
  interface PaletteOptions {
    gray?: PaletteOptions['primary'];
  }
}

// ✅ Extend Button to allow 'gray' as a color prop
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    gray: true;
  }
}

interface ColorModeContextType {
  toggleColorMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {}
});

// eslint-disable-next-line react-refresh/only-export-components
export const useColorMode = () => useContext(ColorModeContext);

export function CustomThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme: Theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                background: {
                  default: '#dbe7e8',  // soft blue
                  paper: '#ffffff',
                },
                primary: {
                  main: '#1a73e8',     // google blue
                },
                secondary: {
                  main: '#5f6368',     // subtle gray (for icons or chips)
                },
                gray: {
                  main: '#3c4043',     // dark gray for buttons
                  contrastText: '#ffffff',
                },
                text: {
                  primary: '#202124',  // clean blackish
                  secondary: '#5f6368',
                },
              }
            : {
                background: {
                  default: '#121212',
                  paper: '#1e1e1e',
                },
                primary: {
                  main: '#8ab4f8',     // softer blue for dark mode
                },
                secondary: {
                  main: '#e8eaed',
                },
                gray: {
                  main: '#9aa0a6',
                  contrastText: '#ffffff',
                },
                text: {
                  primary: '#e8eaed',
                  secondary: '#9aa0a6',
                },
              }),
        },
        typography: {
          fontFamily: 'Roboto, sans-serif',
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
