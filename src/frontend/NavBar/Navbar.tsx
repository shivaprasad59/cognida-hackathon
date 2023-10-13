import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import './ButtonAppBar.css'; // Import your CSS file

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (route) => {
    navigate(route);
    setMenuOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MY STORE
          </Typography>
          {window.innerWidth <= 600 ? (
            <MenuIcon className="menu-icon" onClick={handleMenuClick} />
          ) : (
            <div className="menu-buttons">
              <Button color="inherit" startIcon={<HomeIcon />} onClick={() => handleMenuItemClick('/home')}>
                Home
              </Button>
              <Button color="inherit" startIcon={<StorefrontIcon />} onClick={() => handleMenuItemClick('/shopping')}>
                Fashion
              </Button>
              <Button color="inherit" startIcon={<ShoppingCartIcon />} onClick={() => handleMenuItemClick('/cart')}>
                Cart
              </Button>
              <Button color="inherit" startIcon={<AccountCircleIcon />} onClick={() => handleMenuItemClick('/account')}>
                Account
              </Button>
            </div>
          )}
        </Toolbar>
        {menuOpen && window.innerWidth <= 600 && (
          <div className="menu-dropdown">
            <Button color="inherit" onClick={() => handleMenuItemClick('/home')}>
              Home
            </Button>
            <Button color="inherit" onClick={() => handleMenuItemClick('/shopping')}>
              Fashion
            </Button>
            <Button color="inherit" onClick={() => handleMenuItemClick('/cart')}>
              Cart
            </Button>
            <Button color="inherit" onClick={() => handleMenuItemClick('/account')}>
              Account
            </Button>
          </div>
        )}
      </AppBar>
    </Box>
  );
}
