//instructions
// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

//solution
function isPalindrome(x) {
  let result = "";
  x = x.toLowerCase();
  for (let i = x.length - 1; i >= 0; i--) {
    result += x[i];
  }
  return result == x;
}
