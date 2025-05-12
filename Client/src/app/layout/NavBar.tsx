import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Container,
  Tooltip
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import { DarkMode, LightMode } from '@mui/icons-material';

type Props = {
  toggleDarkMode: () => void;
  darkMode: boolean;
};

export default function Navbar({ darkMode, toggleDarkMode }: Props) {

  return (
    <AppBar
  position="sticky"
  elevation={2}
  sx={{
    background: darkMode
      ? 'linear-gradient(90deg, #1e293b, #0f172a)'  // already good for dark
      : 'linear-gradient(90deg, #b0bec5, #90a4ae)', // darker slate blue-gray gradient
    color: '#fff',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)'
  }}
>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          
          {/* Left: Logo + Brand */}
          <Box display="flex" alignItems="center">
            <StoreIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: 'bold',
                letterSpacing: '.05rem',
                display: { xs: 'none', sm: 'block' },
              }}
            >
              Anthony & Co.
            </Typography>
          </Box>

          {/* Right: Dark mode toggle + Cart */}
          <Box display="flex" alignItems="center" gap={1}>
            <Tooltip title="Toggle Light/Dark Mode">
              <IconButton onClick={toggleDarkMode} sx={{ color: '#fff' }}>
                {darkMode ? <DarkMode /> : <LightMode />}
              </IconButton>
            </Tooltip>

            <Tooltip title="View Cart">
              <IconButton size="large" sx={{ color: '#fff' }}>
                <ShoppingCartIcon />
              </IconButton>
            </Tooltip>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}


// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
//   IconButton,
//   Container,
//   Tooltip,
//   useTheme
// } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import StoreIcon from '@mui/icons-material/Store';
// import { DarkMode, LightMode } from '@mui/icons-material';

// type Props = {
//   toggleDarkMode: () => void;
//   darkMode: boolean;
// };

// export default function Navbar({ darkMode, toggleDarkMode }: Props) {
//   const theme = useTheme();

//   return (
//     <AppBar
//       position="sticky"
//       elevation={2}
//       sx={{
//         backgroundColor: theme.palette.mode === 'dark'
//           ? theme.palette.background.paper
//           : theme.palette.primary.main,
//         color: '#fff'  // <- Always use white for text/icons
//       }}
//     >
//       <Container maxWidth="xl">
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

//           {/* Left: Logo + Brand */}
//           <Box display="flex" alignItems="center">
//             <StoreIcon sx={{ mr: 1 }} />
//             <Typography
//               variant="h6"
//               noWrap
//               sx={{
//                 fontWeight: 'bold',
//                 letterSpacing: '.05rem',
//                 display: { xs: 'none', sm: 'block' },
//               }}
//             >
//               Anthony & Co.
//             </Typography>
//           </Box>

//           {/* Right: Theme toggle and cart */}
//           <Box display="flex" alignItems="center" gap={1}>
//             <Tooltip title="Toggle Light/Dark Mode">
//               <IconButton onClick={toggleDarkMode} sx={{ color: '#fff' }}>
//                 {darkMode ? <DarkMode /> : <LightMode />}
//               </IconButton>
//             </Tooltip>

//             <Tooltip title="View Cart">
//               <IconButton size="large" sx={{ color: '#fff' }}>
//                 <ShoppingCartIcon />
//               </IconButton>
//             </Tooltip>
//           </Box>

//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }


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