import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark' : 'light'
  
  
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType === 'light') ? '#121212' : '#eaeaea'
      }
    }
  })

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }




  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar toggleDarkMode={toggleDarkMode} darkMode= {darkMode} />
        <Box
          sx={{
            minHeight: '100vh',
            background: darkMode ? 'radial-gradient(circle at top left, #121212, #1e1e2f, #2d2d44)' : 'radial-gradient(circle at top left, #dbeafe, #ffffff)' ,
            py: 6,
            display: 'flex',
            flexDirection: 'column'
          }}>
          <Container maxWidth='xl' sx={{mt: 8}}>
            <Outlet />
          </Container>
      </Box>

    </ThemeProvider>
  )
}

export default App
