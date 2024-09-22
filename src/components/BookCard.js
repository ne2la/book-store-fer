import React from 'react';
import { Card, CardContent, Typography, CardMedia, CardActions, Button } from '@mui/material';

const BookCard = ({ title, author, genre, year, isbn, imageUrl }) => (
  <Card
  sx={{
    marginBottom: '20px',
    boxShadow: '0px 5px 15px rgba(0,0,0,0.1)', // Add shadow for modern look
    borderRadius: '12px',                      // Larger radius
    width: 240,
    height: 400,
    opacity: 0.9
    // border: '1px solid rgba(255, 255, 255, 0.125)',
    // backgroundColor: 'rgba(17, 25, 40, 0.75)',
    // backdropFilter: 'blur(16px) saturate(180%)',
    // WebkitBackdropFilter: 'blur(16px) saturate(180%)', // For Safari
  }}
  >
    <CardMedia
      component="img"
      height="150"
      image={imageUrl}
      alt={title}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <strong>Author:</strong> {author}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <strong>Genre:</strong> {genre}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <strong>Year Published:</strong> {year}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <strong>ISBN:</strong> {isbn}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">Buy Book</Button>
    </CardActions>
  </Card>
);

export default BookCard;
