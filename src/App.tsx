import React from 'react';
import './App.css';
import Actions from './components/actions/actions.component';
import Chooser from './components/chooser/chooser.component';
import Visualizer from './components/visualizer/visualizer.component';

const App = () => {
  return (
    <>
      <h1 className='text-center text-[32px] md:text-[48px] font-extrabold text-zinc-700'>
        Algo Visualizer
      </h1>
      <div className='mt-[20px] md:mt-[40px] flex flex-col md:flex-row justify-evenly'>
        <Visualizer />
        <div className='flex flex-col gap-[20px] w-full md:w-auto'>
          <Chooser />
          <Actions />
        </div>
      </div>
    </>
  );
};

export default App;
