/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

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