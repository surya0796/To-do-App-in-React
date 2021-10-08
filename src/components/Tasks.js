import Task from './Task';

const Tasks = ({ tasks, onDelete, remind }) => {
        return (
        <>
        {tasks.map((task)=>{
            return <Task key = {task.id} task = {task}
            onDelete = {onDelete} remind = {remind} /> 
        })}
        </>
    )
}


export default Tasks
