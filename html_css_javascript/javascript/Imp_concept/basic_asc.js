const p = new Promise((resolve , reject)=>{
    console.log("inside the resolve") ; 
    resolve("this is p which is resolve") ; 

})

console.log(p) ; 

async function call(){
    console.log("inside the call")
    return p ;  
}

const val =  call() ; 
console.log(val) ; 

val.then((res)=>console.log(res)) ; 