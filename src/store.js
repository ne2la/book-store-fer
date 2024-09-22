import { createStore } from 'redux';

// Initial State
const initialState = {
  emotion: 'Neutral', // Default emotion
};

// Reducer Function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMOTION':
      return {
        ...state,
        emotion: action.payload,  // Update the emotion based on the action payload
      };
    default:
      return state;
  }
};

// Create Redux Store
const store = createStore(rootReducer);

export default store;
