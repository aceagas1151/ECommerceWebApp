import { useEffect, useState } from "react"
import type { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";

function App() {
  const [products, setProducts] = useState<Product[]>([])
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

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])


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
            <Catalog products={products} addProduct={function (): void {
             throw new Error("Function not implemented.");
          } }/>   
          </Container>
      </Box>

    </ThemeProvider>
  )
}

export default App
