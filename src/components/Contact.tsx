import React from 'react';
import { Container, Typography } from '@mui/material';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section id={id}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Contacto
        </Typography>
        <Typography variant="body1" paragraph>
          Puedes contactarnos en nuestra dirección o a través de los siguientes medios:
        </Typography>
        <Typography variant="body1">
          Dirección: Calle Falsa 123, Ciudad, País
        </Typography>
        <Typography variant="body1">Teléfono: +123 456 7890</Typography>
        <Typography variant="body1">Email: contacto@miempresa.com</Typography>
      </Container>
    </section>
  );
};

export default Contact;
