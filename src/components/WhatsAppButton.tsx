import React from 'react';
import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <Fab
      color="primary"
      aria-label="WhatsApp"
      onClick={handleClick}
      style={{ position: 'fixed', bottom: 16, right: 16 }}
    >
      <WhatsAppIcon />
    </Fab>
  );
};

export default WhatsAppButton;
