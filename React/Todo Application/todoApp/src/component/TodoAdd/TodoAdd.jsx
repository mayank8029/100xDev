import React from 'react'

const TodoAdd = () => {
  function handelAdd(){

  }
  return (
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'30vh',
      
    }}>
    <input type='text' placeholder='enter your task'/>
    <button onClick={handelAdd}>Add</button>
    </div>
  );
}

export default TodoAdd