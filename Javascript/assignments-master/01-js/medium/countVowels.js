/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let ans = 0 ; 
    let str1 = str.toLowerCase() ; 
    let slen = str1.length ;

    let hash ={} ;  
    let arr = ['a' , 'e' , 'i' , 'o' , 'u'] ; 
    for(let i = 0 ; i < 5  ; i++){
      hash[arr[i]] = true ; 
    }

    for(let i = 0 ; i < slen;i++){
          if(hash[str1[i]]) ans++ ;   
    }
    return ans ; 
}

module.exports = countVowels;