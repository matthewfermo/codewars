//instructions
//Given a list of integers, determine whether the sum of its elements is odd or even.
//Give your answer as a string matching "odd" or "even".
//If the input array is empty consider it as: [0] (array with a zero).

//solution

//steps
//Sum the numbers in the array: You can use a loop or the reduce method to sum up all the elements of the array.
//Determine if the sum is odd or even: You can do this by checking if the sum modulo 2 (sum % 2) equals 0. If it does, the sum is even; otherwise, it's odd.
//Return "odd" or "even" based on the result.

function oddOrEven(array) {
  // Sum the elements of the array
  let sum = array.reduce((acc, val) => acc + val, 0);

  // Check if the sum is odd or even and return the corresponding string
  return sum % 2 === 0 ? "even" : "odd";
}

//another solution
function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}
