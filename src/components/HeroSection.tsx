import React from 'react';
import { Container, Typography } from '@mui/material';

interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  return (
    <section id={id} style={{ height: '100vh', backgroundImage: 'url(/path/to/your/image.jpg)' }}>
      <Container>
        <Typography variant="h2" gutterBottom>
          Bienvenidos a Mi Empresa
        </Typography>
        <Typography variant="h5">Soluciones industriales a medida</Typography>
      </Container>
    </section>
  );
};

export default HeroSection;
