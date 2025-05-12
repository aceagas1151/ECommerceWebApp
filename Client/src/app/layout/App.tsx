import { useEffect, useState } from "react"
import type { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const darkMode = false;
  const palleteType = darkMode ? 'dark' : 'light'
  
  
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType === 'light') ? '#121212' : '#eaeaea'
      }
    }
  })

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
        <Box
          sx={{
            minHeight: '100vh',
            background: darkMode ? '#121212' : '#eaeaea',
            display: 'flex',
            flexDirection: 'column'
          }}>
          <Container maxWidth='xl' sx={{mt: 14}}>
            <Catalog products={products} addProduct={function (): void {
             throw new Error("Function not implemented.");
          } }/>   
          </Container>
      </Box>

    </ThemeProvider>
  )
}

export default App
