import React, { useState } from 'react'

function TODO() {
    const [tasks,setTasks] = useState(["eat", "sleep","code","repeat"]);
    const [task,setTask] = useState([""]);

function addtask()
{ if (task !== "") {
 setTasks((t)=>[...tasks,task])
 setTask("")}


}
function handleonchange(event)
{
setTask(event.target.value)
}
function taskup(index){
    if (index > 0) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = [
          updatedTasks[index - 1],
          updatedTasks[index],
        ];
        setTasks(updatedTasks);
      }
    
}
function taskdown(index){
    if (index < tasks.length - 1) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [
          updatedTasks[index + 1],
          updatedTasks[index],
        ];
        setTasks(updatedTasks);
      }
}
function taskdelete(index){
    const updatedtasks = tasks.filter((task,i)=>(i!==index))
    setTasks(updatedtasks)
}

  return (

    <div>
      <input className='taskenter' placeholder='Enter Task' onChange={handleonchange} value={task}></input>
      <button className='btn' onClick={addtask}>Add </button>
      <ol>
        
        {tasks.map((task,index) => (
            <li key={index}>
            <span className='tasklisting'>{task}</span>
            <button className='btn' onClick={()=>taskup(index)}>up</button>
            <button className='btn' onClick={()=>taskdown(index)}>down</button>
            <button className='btn' onClick={()=>taskdelete(index)}>delete</button>
            </li>
        ))}
      </ol>
      

      
    </div>

    )
}

export default TODO;
