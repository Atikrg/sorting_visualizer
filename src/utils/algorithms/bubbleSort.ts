export function bubbleSort(arr) {
  let len = arr.length;
  let swapped;
  do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
          if (arr[i] > arr[i + 1]) {
              // Swap elements
              [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
              swapped = true;
          }
      }
      len--; // After each iteration, the largest element is in place
  } while (swapped);
  return arr;
}

// Example usage
const array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array));
