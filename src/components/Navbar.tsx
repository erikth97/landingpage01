import React from 'react';
import { Link } from 'react-scroll';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <AppBar position="fixed" color="default" elevation={0}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Company
        </Typography>
        <Link to="hero" smooth={true} duration={500}>
          <Button color="inherit">Inicio</Button>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <Button color="inherit">Nosotros</Button>
        </Link>
        <Link to="services" smooth={true} duration={500}>
          <Button color="inherit">Servicios</Button>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <Button color="inherit">Contacto</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
