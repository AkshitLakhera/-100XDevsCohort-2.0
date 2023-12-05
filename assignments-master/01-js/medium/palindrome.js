/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const newStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  for (let i = 0 ;i <Math.floor(newStr.length / 2);i++) {
    if (newStr[i] !== newStr[newStr.length -i-1]) {
      return false
    }
}
return true
}

module.exports = isPalindrome;
