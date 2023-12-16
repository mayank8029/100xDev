// UNDERSTANDING ABOUT TEMPORAL DEAD ZONE AND LET CONST VAR 

// // Here a was assigned memory but in a seperate space not in a global space 
// console.log(a) ; //  reference error ; 

// //same for const 
// console.log(b) ; //  reference error
// console.log(c) ; 

// // it is declared in a global space
// let a = 10 ; 

// // variable has functional scope.
// var b = 20 ; 
// const c = 30 ; 

// ERRORS IN JAVASCRIPT 

// let a = 10 ; 
// a = 'mayank';
// console.log(a) ; 

// var b = 10 ; 
// b = "jhanwar"
// console.log(b)

// const c = 9 ; 
// c = 5 ; //Type error 


//  let a = 10 ; 
//   let a = "mayank" ;  // syntax error 

// // no syntax error 
// console.log(a) ; 
// var a = 10 ; 
// var a = 'mayank' ; 
// console.log(a) ; 



// BLOCK IN JS 
// var b = "this is global" ; 
// let a = 100 ;
// if(true)  {
//     let a = "mayank" ; 
//     console.log(a) ;//mayank 
//     var b= 100 ; 
// }

// console.log(b)// 100
// console.log(a)// 100




