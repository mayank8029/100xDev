import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoState } from './atom'

const List = () => {

  const todos = useRecoilValue(todoState)
  console.log

  return (
    <div style={{
        display:'flex',
        justifyContent:'center',
        width:"100vw",
        alignItems:"center"
    }}>
    <div style={{
        backgroundColor:'whitesmoke',
        color:"red",
        height:"40vh" , 
        width:"70vw",
        alignItems:"center"
    }}>
    {
      todos.map((todo)=>(
     <div key = {todo.id}>
          <li >{todo.discription}</li><button>done</button>

          </div>

      ))
    }
    </div>
    
    </div>
  )
}

export default List