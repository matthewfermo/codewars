// instruction

//Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

//Example: (Input1, Input2 -->Output)

//solution
//Convert the strings to numbers: You can use parseInt or Number for conversion.

//Sum the numbers: Simply add the two numbers together.

//Convert the sum back to a string: Use the toString method or String concatenation.

//Return the result.

function sumStr(a, b) {
  let sum = BigInt(a) + BigInt(b);

  return sum.toString();
}
