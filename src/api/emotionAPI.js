import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000';

export const detectEmotion = async (imageBase64) => {
  try {
    const response = await axios.post(`${BASE_URL}/detect_emotion`, {
      image: imageBase64
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data.emotion;
  } catch (error) {
    console.error('Error detecting emotion:', error);
    throw error;
  }
};
