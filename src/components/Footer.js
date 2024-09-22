import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => (
  <Container maxWidth="xl" sx={{ textAlign: 'center', padding: '20px 0', backgroundColor: '#333', color: '#fff' }}>
    <Typography variant="body2">
      &copy; 2024 Emotion-Based Bookstore. All rights reserved.
    </Typography>
  </Container>
);

export default Footer;