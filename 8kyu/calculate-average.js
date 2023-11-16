//Write a function which calculates the average of the numbers in a given list.
//Note: Empty arrays should return 0.

//solution

//1. **Check if the array is empty:** If the array is empty, you might want to return a specific value, like `0` or `null`, depending on the problem statement.

//2. **Sum all the numbers in the array:** You can do this using a loop or array methods like `reduce`.

//3. **Divide the sum by the length of the array:** This gives you the average.

//4. **Return the result.**

function findAverage(array) {
  // Check if the array is empty
  if (array.length === 0) {
    return 0; // or return null; depending on the requirement
  }

  // Sum the elements of the array
  let sum = array.reduce((acc, val) => acc + val, 0);

  // Calculate the average
  let average = sum / array.length;

  // Return the average
  return average;
}

//another solution

var find_average = (array) => {
  return array.length === 0
    ? 0
    : array.reduce((acc, ind) => acc + ind, 0) / array.length;
};
