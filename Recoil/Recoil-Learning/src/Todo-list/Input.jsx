import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { todoState } from './atom'
import getId from './Id'
const Input = () => {

  const [info , setInfo]= useRecoilState(todoState)


  const handelSubmit = (e)=>{
    e.preventDefault() ; 

    const data = new FormData(e.target)
    const task =  data.get("Task");
   
    const discription = data.get("discription")

    const finalValue = {
      id:getId(),
      task:task , 
      discription:discription,
      isDone:false
    }

    setInfo([...info , finalValue])
    console.log(info)
    
    e.target.reset()

  }

  
  return (
    <>
    <form onSubmit={handelSubmit}>
    <label>Your Task</label>
    <input type="text"  name="Task"/>
    <label>discription</label>
    <input type = "text" name = "discription" />
    <input type = "submit" value="Submit"/>
    </form>
    </>
  )
}

export default Input