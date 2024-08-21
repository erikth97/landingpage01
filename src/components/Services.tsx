import React from 'react';
import { Container, Typography } from '@mui/material';

interface ServicesProps {
  id: string;
}

const Services: React.FC<ServicesProps> = ({ id }) => {
  return (
    <section id={id}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Nuestros Servicios
        </Typography>
        <Typography variant="body1" paragraph>
          Ofrecemos una gama de servicios industriales diseñados para mejorar la eficiencia de tu negocio...
        </Typography>
        {/* Aquí puedes añadir las tarjetas de los servicios */}
      </Container>
    </section>
  );
};

export default Services;
