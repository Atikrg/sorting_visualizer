import { createSlice } from "@reduxjs/toolkit";
import { bubbleSort } from "../../utils/algorithms/bubbleSort";

const initialBoxValues = [
  { id: 1, color: 'teal', number: 0 },
  { id: 2, color: 'teal', number: 0 },
  { id: 3, color: 'teal', number: 0 },
  { id: 4, color: 'teal', number: 0 },
  { id: 5, color: 'teal', number: 0 },
  { id: 6, color: 'teal', number: 0 },
  { id: 7, color: 'teal', number: 0 },
  { id: 8, color: 'teal', number: 0 },
  { id: 9, color: 'teal', number: 0 },
  { id: 10, color: 'teal', number: 0 },
  { id: 11, color: 'teal', number: 0 },
  { id: 12, color: 'teal', number: 0 },
  { id: 13, color: 'teal', number: 0 },
  { id: 14, color: 'teal', number: 0 },
  { id: 15, color: 'teal', number: 0 },
  { id: 16, color: 'teal', number: 0 },
  { id: 17, color: 'teal', number: 0 },
  { id: 18, color: 'teal', number: 0 },
  { id: 19, color: 'teal', number: 0 },
  { id: 20, color: 'teal', number: 0 },
  { id: 21, color: 'teal', number: 0 },
  { id: 22, color: 'teal', number: 0 },
  { id: 23, color: 'teal', number: 0 },
  { id: 24, color: 'teal', number: 0 },
  { id: 25, color: 'teal', number: 0 },
  { id: 26, color: 'teal', number: 0 },
  { id: 27, color: 'teal', number: 0 },
  { id: 28, color: 'teal', number: 0 },
  { id: 29, color: 'teal', number: 0 },
  { id: 30, color: 'teal', number: 0 },
  { id: 31, color: 'teal', number: 0 },
  { id: 32, color: 'teal', number: 0 },
  { id: 33, color: 'teal', number: 0 },
  { id: 34, color: 'teal', number: 0 },
  { id: 35, color: 'teal', number: 0 },
  { id: 36, color: 'teal', number: 0 },
  { id: 37, color: 'teal', number: 0 },
  { id: 38, color: 'teal', number: 0 },
  { id: 39, color: 'teal', number: 0 },
  { id: 40, color: 'teal', number: 0 }
];

const generateRandomNumbersSlice = createSlice({
  name: 'numbers',
  initialState: {
    values: initialBoxValues,
  },
  reducers: {
    generateRandomNumbers(state) {
      state.values.forEach(item => {
        item.number = Math.floor(Math.random() * 100);
      });
    },

    setSortElements(state, action) {
      // Assuming action.payload is the new sorted array
      state.values = state.values.map((item, index) => ({
        ...item,
        number: action.payload[index], // Set number based on sorted array
      }));
    },
    resetRandomNumbers(state) {
      state.values.forEach(item => {
        item.number = 0;
      });
    }
  }
});

// Export actions and reducer
export const { generateRandomNumbers, resetRandomNumbers, setSortElements } = generateRandomNumbersSlice.actions;
export default generateRandomNumbersSlice.reducer; // Export the reducer
