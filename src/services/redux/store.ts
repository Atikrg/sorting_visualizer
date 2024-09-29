import { configureStore } from '@reduxjs/toolkit';
import generateRandomNumbersReducer from './generateRandomNumbersSlice';
import selectedAlgorithmsReducer from './selectedAlgorithmsSlice';

export const store = configureStore({
  reducer: {
    numbers:generateRandomNumbersReducer,
    algorithm:selectedAlgorithmsReducer,
  }
})