import React, { useRef,useEffect } from 'react';
import Webcam from 'react-webcam';
import { useDispatch } from 'react-redux';
import { detectEmotion } from './api/emotionAPI';  // Axios call
import { setEmotion } from './redux/emotionSlice';  // Redux action

const EmotionDetection = () => {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();

    try {
      const base64Image = imageSrc.split(',')[1];  // Extract base64 data
      const detectedEmotion = await detectEmotion(base64Image);  // Call API
      dispatch(setEmotion(detectedEmotion));  // Update emotion in Redux store
    } catch (error) {
      console.error('Error detecting emotion:', error);
    }
  };

  // const capture = async () => {
  //   const imageSrc = webcamRef.current.getScreenshot();

  //   if (imageSrc) {
  //     try {
  //       const base64Image = imageSrc.split(',')[1];  // Extract base64 data
  //       const detectedEmotion = await detectEmotion(base64Image);  // Call API
  //       dispatch(setEmotion(detectedEmotion));  // Update emotion in Redux store
  //     } catch (error) {
  //       console.error('Error detecting emotion:', error);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     capture();  // Call the capture function every 5 seconds
  //   }, 5000);

  //   // Clean up the interval when the component unmounts
  //   return () => clearInterval(interval);
  // }, []); 

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        style={{ width: "100%", height: "250px" }}
      />
      <br />
      <button onClick={capture}>Check your emotion</button>
    </div>
  );
};

export default EmotionDetection;
