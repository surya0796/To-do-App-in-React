import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)
    
    const onSubmit = (e) => {
        e.preventDefault() //it is called on the event when submitting the form to prevent a browser reload/refresh.

        if(!text){
            alert('Please enter some text')
        }
        else{
        onAdd({ text,date,reminder })
        }
        setText('')
        setDate('')
        setReminder(false)
    }

    return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input type="text" placeholder="Add new task" value={text} onChange={(e)=> setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="">Date & Time</label>
        <input type="date" placeholder="Add Date & Time" value={date} onChange={(e)=> setDate(e.target.value)} />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Set Reminder</label>
        <input type="checkbox" value={reminder} checked={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)} />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
