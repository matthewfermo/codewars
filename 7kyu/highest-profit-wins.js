// instructions

// Write a function that returns both the minimum and maximum number of the given list/array.

// solution

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// other solution

const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];
