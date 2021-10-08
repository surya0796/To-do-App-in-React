import { TiDelete } from 'react-icons/ti'
const Task = ({ task, onDelete, remind }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => remind(task.id)} >
            <h3>{task.text}
                {task.id!==0 && <TiDelete
                    className="delete"
                    onClick={() => onDelete(task.id)}//important step note down please
                />} </h3>
            <p>{task.date}</p>
        </div>
    )
}
Task.defaultProps = {
    task: {
        id: 0,
        text: 'Nothing to show here!',
        date: '',
        reminder: 'false'
    }
}

export default Task
