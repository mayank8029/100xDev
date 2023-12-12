// components are the peace of ui that has there own logic and appearance that can be used anywhere we required. They generally help us in making our code reusable 
const user ={
    fname:mayank ,
    lname: Jhanwar 
}

function MyButton() {
    return (
      <button>I'm a button</button>
    );
  }

  let content ; 

  if(isLoggedin){
    content = <AdminPanel/> ; 
  }
  else{
    content = <Login/> ; 
  }

export default function myApp(){
    let isLoggedin = false ; 
    return(
        <>


        {
            isLoggedin?(
                <AdminPanel/>
            ):(
                <Login/>
            )
        }
        
        <h1 className="heading">Hello , Welcome to my app</h1>
        <h2>hi {user.fname}</h2>
        <MyButton/>
        // here My button start with a capital letter that how i know about it is a react component 
        </>
    ) ; 
}

const product = [
    {
        productName: "smart" , 
        productId : 1 , 
        productColor: "blue"
    },
    {
        productName:"Phone" ,
        productId:2 , 
        productColor:"red"
    }
]


const listItem = product.map((product)=>{
     <li key = {product.productId}> {product.productName}</li>
     
})


function MyButton(){
    const [count , useCount]=useState(0) ; 

    function handelClick(){
        alert
    }

    return(
      <button onClick={handelClick}>My Button</button>
    );
}

