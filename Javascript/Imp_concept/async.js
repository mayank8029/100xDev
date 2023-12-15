function letcheck(){
    setTimeout(()=>{
       console.log("inside letcheck")
    } , 5000)
    console.log("kdsiohgiufdhgpuerdfhiuperhvd")
}
// letcheck() ; 
// the promise start resolving and take 5 second ;
const p1 = new Promise((resolve  ,reject)=>{
    console.log("inside p1 before settimeout")
    setTimeout(()=>{
       resolve("inside p1 resolved") ;
    } , 5000)
    console.log("inside p1 after settimeout")


})

// below promise start resolving and take 7 sec ;  
const p2 = new Promise((resolve , reject)=>{
    console.log("inside p2 before settimeout")
     setTimeout(()=>{
       resolve("inside p2 resolved")
     } , 5000)
    console.log("inside p2 after settimeout")

} )

async function check(){
    console.log("inside check")
   // after seeing await statement this program will going to get suspended and the come when all thing executed 
   // if javascript engine waits then whole system will going to be freezed , that why it will not wait . 
   // it will let other do their work and then complete itself
    const val1 = await p1 ; 
    console.log("p1 completed its execution")
    console.log(val1) ; 
    // this will going to wait for p2 to get executed and will going to execute all and then come ; 
    const val2 = await p2 ; 
    console.log("p2 completed its execution")
    console.log(val2) ; 
}

// function letcheck(){
//     setTimeout(()=>{
//        console.log("inside letcheck")
//     } , 3000)
// }


check() ; 
letcheck() ;

// from the above two function which will going to complete first execute first as they are inside callstack 

