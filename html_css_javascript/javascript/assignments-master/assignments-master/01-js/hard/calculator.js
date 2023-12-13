/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
let result = 0 ; 
class Calculator {

  constructor(){

  }





  add(val) {
    result = result +val ; 
    // return result ;  
  }
  subtract(val){
    result = result-val ; 
    // return result ; 
  }

  multiply(val){
    result = result*val ; 
  }
  
  divide(val){
    if(val==0) return Error ; 
    result = result/ val ; 
  }

  clear(){
    result = 0 ; 
  }

  getResult(){
    return result ; 
  }

  calculate(str){
    let prev = 0 ; 
    let ahead = 0 ; 
    let a = 0 ; 
    let m = 0 ; 
    let d = 0 ; 
    let s = 0 ; 

    
    for(let i =0 ; i < n ; i++){
      (str[i]=='+' && a==0 ) ? a = 1 : return Error;;
       
      if(str[i]=='-' && s == 0) s = 1 ;
      if(str[i]=='*' && m==0) m = 1 ; 
      if(str[i]=='/' && m==0) d = 1 ; 

    }
   }
 
  

}

module.exports = Calculator;
