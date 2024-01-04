import React, { useState } from 'react'
import { useContext } from 'react'
import { listFunctions  } from './Context.js'
const AddTask = () => {
    
    const [text , setText]= useState('')
    const addTask = useContext(listFunctions)
  return (
    <div>
    <input value={text}
     placeholder='Add task'
     onChange={(e)=>{
        setText(e.target.value) ; 
     }}
     />
    <button 
    onClick={()=>{
        addTask(text)
        setText('');
    }}
    > Add</button>
    </div>
  )
}

export default AddTask