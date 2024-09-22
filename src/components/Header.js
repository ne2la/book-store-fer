import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header = () => (
  <AppBar position="static" color="transparent" sx={{ padding: '20px 0' }}>
    <Toolbar sx={{ flexDirection: 'column', alignItems: 'center' }}>
      <Box>
        <Typography variant="h4" component="div" align="center">
          Emotion-Based Bookstore
        </Typography>
        <Typography variant="subtitle1" component="div" align="center" sx={{ marginTop: 1 }}>
          Find Books Based on How You Feel
        </Typography>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;