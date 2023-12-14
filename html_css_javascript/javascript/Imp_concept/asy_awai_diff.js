//HOW WE CAN HANDEL PROMISES HERE

const p = new Promise((resolve , reject)=>{
     resolve("hi i am rsolved") ; 
})

console.log(p) ; //1st executed

function getValue(){
    console.log("inside get value")//2nd
    p.then((res)=>{
        console.log(res + "inside getvalue") ; 
    })//6th
    console.log("P.then has complete")//3rd

}

getValue();

// HOW WE CAN HANDEL IT USING ASYNC AWAIT 


async function asy(){
    console.log("inside promise") ; //4th
    // js engine will going to wait over this place and not going to execute below lines inside this asy function***** . 
    
    // There is a dependency ... first we have to figure out val and then go for console.log() 
    const val = await p ;//7th
    console.log(val) ; // 8th
}

asy() 

console.log("will i execute last") ; //5th


//****  js engine is not waiting for anyone and this will going to be true in this case also
// it will going to appear to be in waiting bu t it will not .

// pls go to async.js for more detail .


// There is no difference between async and await . This is just the syntacttical sugar of promises .
