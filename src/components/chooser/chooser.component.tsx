import React, { useState, useSyncExternalStore } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedAlgorithmValue, setActive, setAlgoName } from '../../services/redux/selectedAlgorithmsSlice';
import { RootState } from '../../storeTypes';



const Chooser: React.FC = () => {
  const dispatch = useDispatch();

  const sortingAlgorithms = useSelector((state: RootState) => state.algorithm.sortingAlgorithms);
  const active = useSelector((state: RootState) => state.algorithm.active);
  const algoName = useSelector((state: RootState) => state.algorithm.algoName);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {

    if (active === false) {
      alert("Please Generate Random Values");
      return;
    } else {

      const value = parseInt(event.target.value);
      const { name } = sortingAlgorithms[value];
      dispatch(setSelectedAlgorithmValue(value));
      dispatch(setAlgoName(name));
    }

  };

  return (
    <select value={algoName} onChange={handleChange}>
      <option value='' disabled>
        Select Sorting Algorithm
      </option>
      {sortingAlgorithms.map((element) => (
        <option key={element.id} value={element.id}>
          {element.name}
        </option>
      ))}
    </select>
  );
};

export default Chooser;
