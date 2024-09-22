import { configureStore } from '@reduxjs/toolkit';
import emotionReducer from './emotionSlice';

const store = configureStore({
  reducer: {
    emotion: emotionReducer,
  },
});

export default store;
