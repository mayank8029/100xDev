import React, { useState } from 'react'

const AddTask = ({addTask , Id}) => {
    
    const [text , setText]= useState('')
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
        addTask(text , Id)
        setText('');
    }}
    > Add</button>
    </div>
  )
}

export default AddTask