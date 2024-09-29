export interface AlgorithmState {
      sortingAlgorithms: { id: number; name: string }[];
      active: boolean;
      algoName: string;
}

export interface NumbersState {
      values: number[];  // Assuming `values` is an array of numbers
    }


export interface RootState {
      algorithm: AlgorithmState;
      numbers: NumbersState
}