import React from 'react';
import { Container, Typography } from '@mui/material';

interface AboutUsProps {
  id: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ id }) => {
  return (
    <section id={id}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Sobre Nosotros
        </Typography>
        <Typography variant="body1" paragraph>
          Somos una empresa dedicada a ofrecer soluciones industriales de alta calidad...
        </Typography>
        <Typography variant="body1">
          Con años de experiencia en el sector, nuestros servicios están diseñados para satisfacer las necesidades de nuestros clientes.
        </Typography>
      </Container>
    </section>
  );
};

export default AboutUs;
