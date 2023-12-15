// hoisting is the method in which our variables that we had declared will going to be at the top of the scope.

// BUT HOISTING IS NOT ONLY ABOUT THAT :
//  everything in javascript happens inside an execution context . 
// happens in two phases 1) memory creation 
// 2) code execution 


var val  = 2 ;

console.log(val) ;
// this will going to give output 2  

console.log(mayank) ; 
// this will going to give output undefined

var mayank = 23 ; 

console.log(myfun) ;
// above will going to return the whole function 


myfun() ; 
// it will going to return the exact value my name is mayank 

function myfun(val){
    val = val*val ; 
    console.log(val) ; 
    console.log("my name is mayank") ;
}

myfun() ; 
// it will going to return the exact value my name is mayank 



console.log(newfun)
// for the above output is undefined


// newfun() ; 
// it will give us an error that it is not a function 




// the below code not take part in hoisting 
var newfun = ()=>{
    console.log("this is not hoisted . it will considered as variable so initialized in phase 1 with undefined")
}


// this will going to execute the abouve function
// it will also going to give undefined as no value is returning 
console.log(newfun()) ; 






// 1. Hoisting in JavaScript is a process in which all the Variables, Functions and Class defination are declared BEFORE execution of the code 
// 3. Variables are initialised to UNDEFINED when they are declared and Function defination is stored AS IT IS.
// 4. They are declared in Memory Allocation Phase in the Memory Component of Execution Context, so we can use them even BEFORE they are declared.
// 5. UNDEFINED means Variable has been declared but value is not ASSIGNED but NOT DEFINED means Variables is NOT DECLARED.
// 6. When we assign Variable to a Function defination, we CAN NOT call this Variable as Function BEFORE declaration as it will behave as Variable with UNDEFINED value.