import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
function App() {

  const [Tasks , setTasks] = useState(initialTask)
  const [id , setid]= useState(nextId)

  function addTask(task , nextId ){
       setid(id+1)
      //  const newtask = {id:nextId, text: task , done:false}
      //  const allTasks = Tasks
      //  allTasks.push(newtask)
      //  console.log(newtask)
      //  setTasks(allTasks)
      //  console.log(Tasks)
      setTasks([...Tasks , {id: nextId , text:task , done: false}])
      
  }

  return (
    <div className="App">
    <AddTask addTask={addTask} Id={id} />
    <TaskList  allTasks = {Tasks}/>
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
