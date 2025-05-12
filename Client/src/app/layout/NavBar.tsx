import { AppBar, Toolbar, Typography, Box, IconButton, Container } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Logo + Brand */}
          <StoreIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'block' },
              fontWeight: 'bold',
              letterSpacing: '.05rem',
            }}
          >
            Anthony & Co.
          </Typography>

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Right side icons or future actions */}
          <IconButton size="large" edge="end" color="inherit" aria-label="cart">
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


// import { AppBar, Toolbar, Typography } from "@mui/material";

// export default function NavBar() {
//   return (
//     <AppBar position="fixed">
//         <Toolbar>
//             <Typography variant='h4'>Anthony & Co.</Typography>
//         </Toolbar>
//     </AppBar>
//   )
// }