const names: string[]=[] ; 
let value: string[] ; 
names.push("Dylan") ;

console.log(names[0]) ; 

type animalName= string ; 

interface animal {
    name: animalName , 
    age: number , 
    ismamal:boolean 
}

interface newAnimal extends animal{
    new:boolean , 
}



const monkey: animal = {
    name:"jaggu" , 
    age: 3 , 
    ismamal:true 
}

console.log(monkey)

const zebra: newAnimal= {
       name:"zag",
       age:4 , 
       ismamal:true , 
       new:true , 
}

console.log(zebra)

const speak : string = "hello msdjgokjfdc" ; 


console.log(speak)

enum directions{
    North , 
    south , 
    east , 
    west 
}

console.log(directions)


let ourTouple : [number , string , boolean] ; 


ourTouple=[1 , "my name is mayank" , false] ; 
ourTouple.push(23) ; 


function hello():string{
return "say hello" ; 
}

const bol = hello() ; 

console.log(bol) ; 


function mul(a:number , b:number , c?:number){
    return a*b ; 
}
const ab = mul(2 , 3) ; 
console.log(ab) ; 