import { createSlice } from '@reduxjs/toolkit';

const emotionSlice = createSlice({
  name: 'emotion',
  initialState: 'Neutral',
  reducers: {
    setEmotion: (state, action) => action.payload,
  },
});

export const { setEmotion } = emotionSlice.actions;

export default emotionSlice.reducer;