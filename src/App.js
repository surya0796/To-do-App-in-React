import Header from './components/Header'
import Tasks from './components/Tasks';
import Task from './components/Task';
import AddTask from './components/AddTask';
import { useState } from 'react';

const App = () => {
  const [showAddBtn,setShowAddBtn] = useState(false)
  const toggleAdd = () => setShowAddBtn(!showAddBtn) 

  const [tasks, setTasks] = useState([])

  //Add Task to the tasks-object
  const addTask = (task) => {
    const id = Math.floor(Math.random()*1000)+1;
    setTasks([...tasks,{ id,...task }])
    console.log(task)
  }
  // Delete Tasks from list
  const deleteTask = (id) => {
    id!==0 && setTasks(tasks.filter((task) => task.id !== id))
  }
  // Toggle reminder state
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id === id ? ({...task,reminder:!task.reminder}) : (task)))
  }
  return (
    <div className="container">
      <Header title='Task Tracker' showAddBtn={showAddBtn} toggleAdd={toggleAdd} />
      {showAddBtn && <AddTask onAdd={addTask} />}   {/* && is the short form of ternary operator. */}
      {tasks.length > 0 ? 
      (<Tasks tasks={tasks} onDelete={deleteTask} remind={toggleReminder} />)
       : (<Task  onDelete={deleteTask} remind={toggleReminder} />)}
    </div>
  );
}

export default App;
