import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import EmotionsSection from './components/EmotionsSection';
import WebcamSection from './components/WebcamSection';
import Footer from './components/Footer';
import { Container } from '@mui/material';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Container maxWidth="xl">
        <div className="content">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid size={9}>
                <EmotionsSection />
              </Grid>
              <Grid size={3}>
                <WebcamSection />
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
