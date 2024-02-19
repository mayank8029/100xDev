const x:number = 101 ; 

console.log(x) ; 


function greet(MyName : string ){
    console.log(MyName) ; 
}

greet("mayank")

function add(val1:number , val2:number):number{
    return val1 + val2 ; 
}

const value = add(6 ,4) ; 

console.log(value) ; 


// function in function 

function  callbackfun(fn: ()=>void){
    setTimeout(fn , 1000)
}


callbackfun(function(){
    console.log("my name is mayank")
})


function isLegal(user:User):void{
    if(user.age>18) console.log("true")
    else console.log("false") ; 
}

const me:User = {
    name:"mayank" , 
    age:21
}

interface User {
    name:string , 
    age: number,
    email?:string
}

isLegal(me)