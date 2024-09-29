import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  selectedValue: -1,
  active: false,
  algoName: '',
  sortingAlgorithms: [
    { id: 0, name: 'Bubble Sort' },
    { id: 1, name: 'Merge Sort' },
    { id: 2, name: 'Quick Sort' },
    { id: 3, name: 'Counting Sort' },
    { id: 4, name: 'Insertion Sort' },
    { id: 5, name: 'Selection Sort' },
  ]
};

const selectedAlgorithmsSlice = createSlice({
  name: "algorithm",
  initialState: initialValue,
  reducers: {
    setSelectedAlgorithmValue: (state, action) => {
      state.selectedValue = action.payload; // Update the selectedValue directly
    },
    setActive: (state, action) => {
      if (state.active === false) {
        state.active = action.payload;
      } else {
        state.active = action.payload;
      }
    },
    setAlgoName: (state, action) => {
      state.algoName = action.payload;
    }
  },
});

// Export the action
export const { setSelectedAlgorithmValue, setActive, setAlgoName } = selectedAlgorithmsSlice.actions;
export default selectedAlgorithmsSlice.reducer;
