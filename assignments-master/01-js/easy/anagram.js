/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // First check the length of both string
  if (str1.length !== str2.length){
    return false
  }

  // Now we will lowercase the string to solve case sensitive issue
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  //  Counting the frequency of letter
  const obj = {};
  for(let i=0; i<str1.length;i++){
 if (!obj[str1[i]]){
        obj[str1[i]]= 1;
 } else{
          obj[str1[i]] ++;
 }
  }

  //  Now decrimenting the value frequency on letter counted to corss check
  for (let i = 0 ; i<str2.length;i++){
        if (!obj[str2[i]]){
           return false
        }  
        else {
          obj[str2[i]] --;
        }
  }
  return true

}


module.exports = isAnagram;
