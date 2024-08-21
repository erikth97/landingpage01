import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" py={4} bgcolor="primary.main" color="white">
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
