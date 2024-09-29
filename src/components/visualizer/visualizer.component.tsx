import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../storeTypes';

const Visualizer = () => {
  type Item = {
    id: number;
    number: number;
    color: string; // Add the color property
  };

  const boxValues = useSelector((state: RootState) => state.numbers.values);

  // Function to chunk the array into groups of 8
  const chunkArray = (arr: Item[], size: number): Item[][] => {
    let result: Item[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const chunks: Item[][] = chunkArray(boxValues, 8);

  return (
    <div className="flex flex-row">
      {chunks.map((chunk, index) => (
        <div key={index} className="m-[2px] flex flex-col gap-[8px]">
          {chunk.map((item) => (
            <div key={item.id} className="rounded-lg flex items-center justify-center" style={{ backgroundColor: item.color }}>
              <p className="text-white text-[24px] align-center px-[24px] py-[19px]">{item.number}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Visualizer;

