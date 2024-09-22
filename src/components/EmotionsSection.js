import React from 'react';
import { useSelector } from 'react-redux';
import { Typography,Box } from '@mui/material';
import BookCard from './BookCard';
import Grid from '@mui/material/Grid2';
import bookData from "../full_books_data.json"

const EmotionsSection = () => {
  const emotion = useSelector(state => state.emotion); // Get emotion from Redux store

  // const booksForEmotion = {
  //   sad: [
  //     { title: 'Self Help Book', author: 'Author A', genre: 'Self Help', year: 2021, isbn: '9876543210', imageUrl: 'https://jumpbooks.lk/ceruvef/uploads/2023/05/A-Song-of-Ice-and-Fire-Fire-and-Blood-1.jpeg' },
  //     { title: 'Overcoming Adversity', author: 'Author B', genre: 'Motivational', year: 2019, isbn: '9876543211', imageUrl: 'https://jumpbooks.lk/ceruvef/uploads/2023/05/A-Song-of-Ice-and-Fire-Fire-and-Blood-1.jpeg' },
  //   ],
  //   happy: [
  //     { title: 'Feel Good Novel', author: 'Author C', genre: 'Romantic', year: 2020, isbn: '9876543212', imageUrl: 'https://via.placeholder.com/200x300?text=Feel+Good+Novel' },
  //     { title: 'Laugh Out Loud', author: 'Author D', genre: 'Comedy', year: 2021, isbn: '9876543213', imageUrl: 'https://via.placeholder.com/200x300?text=Laugh+Out+Loud' },
  //   ],
  //   Neutral: [
  //     { title: 'Balanced Thoughts', author: 'Author E', genre: 'Philosophical', year: 2022, isbn: '9876543214', imageUrl: 'https://jumpbooks.lk/ceruvef/uploads/2023/05/A-Song-of-Ice-and-Fire-Fire-and-Blood-1.jpeg' },
  //     { title: 'Mindfulness', author: 'Author F', genre: 'Self Help', year: 2018, isbn: '9876543215', imageUrl: 'https://images2.minutemediacdn.com/image/upload/c_crop,w_768,h_1152,x_0,y_0/c_fill,w_720,ar_2:3,f_auto,q_auto,g_auto/images/ImageExchange/mmsport/385/01j2ma7v95fs0r6dj456.jpg' },
  //   ],
  // };

  const booksForEmotion = {
    sad: [
      { title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Inspirational', year: 1988, isbn: '978-0061122415', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4T0aNvgYdBX8kfK_qYc046QFsSXhHE2NXWw&s' },
      { title: 'Eleanor Oliphant Is Completely Fine', author: 'Gail Honeyman', genre: 'Uplifting', year: 2017, isbn: '978-0735220683', imageUrl: 'https://images.penguinrandomhouse.com/cover/9780735220690' },
      { title: 'The Happiness Project', author: 'Gretchen Rubin', genre: 'Inspirational', year: 2009, isbn: '978-0061583261', imageUrl: 'https://m.media-amazon.com/images/I/41bO2i4hh7L._AC_UF894,1000_QL80_.jpg' },
      { title: 'Yes Please', author: 'Amy Poehler', genre: 'Humorous', year: 2014, isbn: '978-0062268341', imageUrl: 'https://m.media-amazon.com/images/I/61wBtiEm2KL._AC_UF1000,1000_QL80_.jpg' },
      { title: 'Eat, Pray, Love', author: 'Elizabeth Gilbert', genre: 'Inspirational', year: 2006, isbn: '978-0143038412', imageUrl: 'https://m.media-amazon.com/images/I/81l2BujvgSL._AC_UF1000,1000_QL80_.jpg' },
      { title: 'The Rosie Project', author: 'Graeme Simsion', genre: 'Humorous', year: 2013, isbn: '978-1476729091', imageUrl: 'https://m.media-amazon.com/images/I/71zbZ+vTjQL._AC_UF1000,1000_QL80_.jpg' },
      { title: 'Yes Please', author: 'Amy Poehler', genre: 'Humorous', year: 2014, isbn: '978-0062268341', imageUrl: 'https://m.media-amazon.com/images/I/61wBtiEm2KL._AC_UF1000,1000_QL80_.jpg' },
      { title: 'Eat, Pray, Love', author: 'Elizabeth Gilbert', genre: 'Inspirational', year: 2006, isbn: '978-0143038412', imageUrl: 'https://m.media-amazon.com/images/I/81l2BujvgSL._AC_UF1000,1000_QL80_.jpg' },
      { title: 'The Rosie Project', author: 'Graeme Simsion', genre: 'Humorous', year: 2013, isbn: '978-1476729091', imageUrl: 'https://m.media-amazon.com/images/I/71zbZ+vTjQL._AC_UF1000,1000_QL80_.jpg' },
      // ... other books
    ],
    angry: [
      { title: 'Atomic Habits', author: 'James Clear', genre: 'Self-Help', year: 2018, isbn: '978-0735211292', imageUrl: 'https://m.media-amazon.com/images/I/61M6KzUbf7L._AC_UF1000,1000_QL80_.jpg' },
      { title: 'The 7 Habits of Highly Effective People', author: 'Stephen R. Covey', genre: 'Self-Help', year: 1989, isbn: '978-0743269513', imageUrl: 'https://m.media-amazon.com/images/I/71rmHeQeuRL._AC_UF1000,1000_QL80_.jpg' },
      { title: 'Think and Grow Rich', author: 'Napoleon Hill', genre: 'Self-Help', year: 1937, isbn: '978-1585424337', imageUrl: 'https://jumpbooks.lk/ceruvef/uploads/2017/03/Think-And-Grow-Rich-2.jpeg' },
      { title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Adventure', year: 1988, isbn: '978-0061122415', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg' },
      { title: 'Think and Grow Rich', author: 'Napoleon Hill', genre: 'Self-Help', year: 1937, isbn: '978-1585424337', imageUrl: 'https://jumpbooks.lk/ceruvef/uploads/2017/03/Think-And-Grow-Rich-2.jpeg' },
      { title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Adventure', year: 1988, isbn: '978-0061122415', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg' }
    ],
    happy: [
      { title: 'The Rosie Project', author: 'Graeme Simsion', genre: 'Lighthearted', year: 2013, isbn: '9781476729091', imageUrl: 'https://m.media-amazon.com/images/I/71zbZ+vTjQL._AC_UF1000,1000_QL80_.jpg' },
      { title: 'Eleanor Oliphant Is Completely Fine', author: 'Gail Honeyman', genre: 'Feel-Good', year: 2017, isbn: '9780008172145', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1557858891i/35900387.jpg' },
      { title: 'Me Before You', author: 'Jojo Moyes', genre: 'Romantic', year: 2012, isbn: '9780718157838', imageUrl: 'https://jumpbooks.lk/ceruvef/uploads/2022/03/Me-Before-You.jpeg' },
      { title: 'The Flatshare', author: 'Beth O\'Leary', genre: 'Romantic', year: 2019, isbn: '9781787474420', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1552471375i/36478784.jpg' },
      // ... other books
    ]
  };

  const books = booksForEmotion[emotion] || booksForEmotion['happy'];

  const emotionMessages = {
    sad: "It seems like you're feeling a little bit sad today. Read the books below to help fade away your sadness.",
    happy: "You’re in a great mood today! Here are some books to keep that smile going.",
    angry: "Feeling frustrated or angry? These books might help calm you down and refocus your energy.",
    Neutral: "It seems like you are feeling neutral. Here are some balanced reads to keep you grounded."
  };

  return (
    <div>
      <Box
        sx={{
          backgroundColor: '#e3f2fd', // Light blue background
          padding: '15px',
          borderRadius: '8px',
          marginBottom: '20px',
          textAlign: 'left',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow
          width:"92%"
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }} gutterBottom>
          {emotionMessages[emotion] || emotionMessages['Neutral']}
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="flex-start">
        {books.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BookCard
              title={book.title}
              author={book.author}
              genre={book.genre}
              year={book.year}
              isbn={book.isbn}
              imageUrl={book.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default EmotionsSection;
