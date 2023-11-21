// instructions

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// solution

// check if the input is null or undefined
// then sort numbers in ascending order

function solution(nums) {
  if (!nums) return [];

  return nums.sort((a, b) => a - b);
}
