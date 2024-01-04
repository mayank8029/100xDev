import React, { useReducer, useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { listFunctions } from "./Context";
import taskReducer from "./taskreducer";
function App() {

  const [Tasks , dispatch] = useReducer(taskReducer , initialTask)
  const [id , setid]= useState(nextId)

  function addTask(task ){
       setid(id+1)
      dispatch({
        type:'addTask',
        task:task , 
        Id: id 
      })
  }

  return (
    <div className="App">
    <listFunctions.Provider value = {addTask}>
    <AddTask addTask={addTask}/>
    <TaskList  allTasks = {Tasks}/>
    </listFunctions.Provider>
    </div>
  );
}

let nextId = 3 ; 

const initialTask = [
    {id:0 , text: "Philosopher path" , done: true},
    {id:1 , text: "visit the temple" , done: false},
    {id:2 , text: "Drink matcha" , done: false}
]
export default App;
