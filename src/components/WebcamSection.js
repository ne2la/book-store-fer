import React from 'react';
import EmotionDetection from '../EmotionDetection';
import { Box, Typography } from '@mui/material';

const WebcamSection = () => (
  <Box
    sx={{
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0px 5px 15px rgba(0,0,0,0.1)', // Adding shadow
      border: '1px solid #ddd', // Adding light border
      backgroundColor: '#fff',
      height:'350px'
    }}
  >
    <Typography variant="h5" gutterBottom>
      Webcam View
    </Typography>
    <div style={{ marginBottom: '10px' }}>
      <EmotionDetection />
    </div>
    <Typography variant="body2" color="text.secondary">
      Emotion detection is active while you browse.
    </Typography>
  </Box>
);

export default WebcamSection;
