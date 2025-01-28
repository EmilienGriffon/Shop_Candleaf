import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Button, Container, Menu, MenuItem, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useCart } from '../../context/CartContext'; 
import './ResponsiveAppBar.scss';

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { cart } = useCart();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" color="black" className="navbar">
      <Container maxWidth="xl">
        <Toolbar className="navbar-toolbar">
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen} className="navbar-menu-icon">
            <MenuIcon />
          </IconButton>

          <Box className="navbar-logo">
            <Typography variant="h6" color="green" className="navbar-logo-text">Candleaf</Typography>
          </Box>

          <Box className="navbar-cart-icon">
            <IconButton color="inherit" component={Link} to="/cart">
              <Badge badgeContent={cart.length} color="error" className="badge-cart-icon-color">
                <ShoppingCartIcon fontSize="large" />
              </Badge>
            </IconButton>
          </Box>

          <Box className="navbar-links">
            <Button component={Link} color="black" to="/" className="navbar-link">Accueil</Button>
            <Button component={Link} color="black" to="/products" className="navbar-link">Produits</Button>
            <Button component={Link} color="black" to="/contact" className="navbar-link">Contact</Button>
          </Box>
        </Toolbar>
      </Container>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} className="mobile-menu" >
        <MenuItem component={Link} to="/" onClick={handleMenuClose}><HomeIcon sx={{ mr: 1 }} /> Accueil</MenuItem>
        <MenuItem component={Link} to="/products" onClick={handleMenuClose}><StoreIcon sx={{ mr: 1 }} /> Produits</MenuItem>
        <MenuItem component={Link} to="/contact" onClick={handleMenuClose}><ContactMailIcon sx={{ mr: 1 }} /> Contact</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
