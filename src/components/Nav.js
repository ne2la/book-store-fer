import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

const Nav = () => (
  <AppBar position="static" style={{background:"#424242"}}>
    <Toolbar style={{ justifyContent: 'center' }}>
      <Button color="inherit">Home</Button>
      <Button color="inherit">Categories</Button>
      <Button color="inherit">Best Sellers</Button>
      <Button color="inherit">New Arrivals</Button>
      <Button color="inherit">Contact</Button>
    </Toolbar>
  </AppBar>
);

export default Nav;