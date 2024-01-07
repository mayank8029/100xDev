import React, { useState } from 'react'
import axios from 'axios'
const Form = () => {

  const [sign , setSign]=useState(false)
  const [name , setName]=useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword]=useState('') 

  async function handelClick(event){
    event.preventDefault()

    console.log(data);
    console.log(name)
    console.log(email)
    console.log(password)

    setName('')
    setEmail('')
    setPassword('')

  }

  async function handelSignUp(){

    const data = await axios.post('' , {
      name:name ,
      email:email ,
      password:password
    })

    console.log(data)

  }

 async function handelSignIn(){
     
   const data = await axios.get('' , {
    email:email ,
    password:password
   })

   console.log(data)
 
  }

  return (
    <>
    <form style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      height:'50vh',
      
    }}
    onSubmit={handelClick}
    >
    {
       !sign &&
      <input type ='text' required value = {name} placeholder='name' onChange={(e)=>{
        setName(e.target.value) ; 
      }}/>
    }
    <input type = 'email' required value = {email} placeholder='email' onChange={(e)=>{
      setEmail(e.target.value)
    }}/>
    <input type = 'password' required value = {password} placeholder='password' onChange={(e)=>{
      setPassword(e.target.value)
    }}/>
    {
      sign?(

        <button type='submit' onClick={handelSignIn}>signIn</button>
        ):(
          <button type='submit' onClick={handelSignUp}>signUp</button>
        )
    }
    
    </form>
    {

      sign?(

        <button onClick={()=>{
          setSign(false)
        }}> create Account</button>
        ) :(
          <button onClick={()=>{
            setSign(true)
          }}>already have an account</button>
        )
      
    }
    </>
    )
}

export default Form