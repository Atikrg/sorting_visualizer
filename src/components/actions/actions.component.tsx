import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateRandomNumbers, resetRandomNumbers, setSortElements } from '../../services/redux/generateRandomNumbersSlice';
import { setActive, setAlgoName } from '../../services/redux/selectedAlgorithmsSlice';
import { RootState } from '../../storeTypes';
import { bubbleSort } from '../../utils/algorithms/bubbleSort';

const Actions = () => {
  const dispatch = useDispatch();

  const active = useSelector((state: RootState) => state.algorithm.active);
  const stateObj = useSelector((state: RootState) => state.numbers.values);
  const numberArray = stateObj.map(({ number }) => number);
  const algoValue = useSelector((state: RootState) => state.algorithm.selectedValue);

  console.log(stateObj);

  const startAlgo = () => {
    if (!active) {
      alert("Please Generate Random numbers");
      return;
    }
    console.log("startAlgo");
    console.log("algo value -", algoValue);

    if (algoValue === 0) {
      bubbleSort(numberArray);
    }

    dispatch(setSortElements(numberArray));
  };

  const resetHandler = () => {
    if (active) {
      dispatch(setActive(false));
      dispatch(resetRandomNumbers());
      dispatch(setAlgoName(''));
    }
    console.log(active);
  };

  const generateHandler = () => {
    dispatch(setActive(true));
    dispatch(generateRandomNumbers());
  };

  return (
    <div className='flex flex-row h-[3em]'>
      <button
        className='py-2 px-5 hover:bg-violet-500 bg-violet-800 text-white rounded-sm m-[4px]'
        onClick={startAlgo}
      >
        START
      </button>
      <button
        className='py-2 px-5 hover:bg-yellow-500 bg-yellow-900 text-white rounded-sm m-[4px]'
        onClick={resetHandler}
      >
        RESET
      </button>
      <button
        className='py-2 px-5 hover:bg-blue-500 bg-blue-900 text-white rounded-sm m-[4px]'
        onClick={generateHandler}
      >
        GENERATE
      </button>
    </div>
  );
};

export default Actions;
