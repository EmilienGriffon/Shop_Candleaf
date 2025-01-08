import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Button, Container, Drawer, List, ListItem, ListItemText, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useCart } from '../../context/CartContext'; 
import './ResponsiveAppBar.scss';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const { cart } = useCart();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="fixed" color="black" className="navbar" sx={{ backgroundColor: '#f2f2f9', boxShadow: 5 }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute', left: 0 }}>
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start' }}>
            <Typography variant="h6" color="green" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Candleaf</Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button component={Link} color="black" to="/" sx={{ '&:hover': { color: "#00a803", textDecoration: 'underline', textUnderlineOffset: '25px', textDecorationColor: '#00a803', textDecorationThickness: '3px', }, }} >
              Accueil
            </Button>
            <Button component={Link} color="black" to="/products" sx={{ '&:hover': { color: "#00a803", textDecoration: 'underline', textUnderlineOffset: '25px', textDecorationColor: '#00a803', textDecorationThickness: '3px', }, }} >
              Produits
            </Button>
            <Button component={Link} color="black" to="/about" sx={{ '&:hover': { color: "#00a803", textDecoration: 'underline', textUnderlineOffset: '25px', textDecorationColor: '#00a803', textDecorationThickness: '3px', }, }} >
              A Propos
            </Button>
            <Button component={Link} color="black" to="/contact" sx={{ '&:hover': { color: "#00a803", textDecoration: 'underline', textUnderlineOffset: '25px', textDecorationColor: '#00a803', textDecorationThickness: '3px', }, }} >
              Contact
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            <IconButton color="inherit"><PersonOutlineIcon fontSize="20px" /></IconButton>
            <IconButton color="inherit" component={Link} to="/cart">
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCartIcon fontSize="20px" />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
          <List>
            <ListItem button component={Link} to="/"><ListItemText primary="Accueil" /></ListItem>
            <ListItem button component={Link} to="/products"><ListItemText primary="Produits" /></ListItem>
            <ListItem button component={Link} to="/about"><ListItemText primary="A Propos" /></ListItem>
            <ListItem button component={Link} to="/contact"><ListItemText primary="Contact" /></ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
