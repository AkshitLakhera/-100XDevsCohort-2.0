/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
// Topic learned in problem
// In JavaScript, we can use the includes() method to check if a particular value is present in an array. The includes() method returns true if the array contains the specified value; otherwise, it returns false
// Counter case sensitivity with changing string into one case

function countVowels(str) {
    // Lowercase the string
    const lowerCase = str.toLowerCase();
    const vowels = ['a','e','i','o','u'];
    let totalVowel = 0;
    for (let i = 0; i<lowerCase.length;i++){
      if (!vowels.includes(lowerCase[i])){
      }else{
       totalVowel++
      }
  }
  return totalVowel;
}

module.exports = countVowels;
