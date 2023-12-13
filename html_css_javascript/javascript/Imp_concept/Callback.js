
// Lets say we want to create an ecommerce website cart and want to add functionalities according to it 

//this is the cart object

const cart = ["pants" , "shoes" , "colors"] ; 

// api.createOrder() ; // create an order and return orderid 
// api.ProcedToPayment() ; // if orderid is there then go for the payment ; 
// api.showSummary() ; // if payment is completed the just show summary ; 
// api.showWallet() ; // then show wallet balance 

// above we can see that all things are dependent on each other thats why we need call backs ; 

function fullname(fname){
    console.log("my name is "+fname) ; 
}

// function myname(fname , fun){
//     console.log(fname) ; 

//     fname = fname + " Jhanwar"
//     fun(fname) ; 
// }
// myname("mayank" ,fullname ) ; 

callback(fname ,function fullname(){
    console.log(fname) ; 
} )

callback("mayank" ) ; 






