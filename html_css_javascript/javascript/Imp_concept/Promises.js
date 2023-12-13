

const cart = ["Pant" , "car"] ; 



var pr = createOrder(cart) ; // this will going to return us the cartid ; 
console.log(pr) ; 

pr
.then(function(){
    console.log("Inside promis")
    ProceedToPayment() ; 
})
.then(function(){
    console.log("Hi this is summary")
})
.then(function(){
    console.log("this is wallet")
})
.catch(function(err){
    console.log("Inside catch fun")
    console.log(err.message) ; 
})

function isValidate(){
    return false; 
}



function createOrder(cart){

    return new Promise(function(resolve , reject){

        if(!isValidate()){
            const err = new Error("this is not validate") ; 
            reject(err) ; 
        }
        
        console.log("createOrder") ; 
       const orderid= "1234" ; 

       resolve(orderid) ; 
           
    })

}

function ProceedToPayment(){
    console.log("proceed to payment") ; 
}

