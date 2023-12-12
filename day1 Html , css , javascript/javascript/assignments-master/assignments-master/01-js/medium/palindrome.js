/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let left = 0 ; 
  let right = str.length  ; 

  while(left < right){
    if(str[left]!=str[right]) return false ; 
    left++ ; 
    right-- ; 
  }

  return false ; 
}

module.exports = isPalindrome;
