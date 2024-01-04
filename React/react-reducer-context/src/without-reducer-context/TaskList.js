import React from 'react'

const TaskList = ({allTasks}) => {
    console.log(allTasks)
  return (
    <div>
    {

        allTasks.map((obj)=>{

         return    <ul key={obj.id}>
         <input type='checkbox' value={obj.done}/>
         {obj.text}
         </ul>
        }
        )
    }
    
    </div>
  )
}

export default TaskList