import { useState } from "react"


const CreateEntry = ({ setAllTasks }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')

    const updateState=(e)=>{
        e.preventDefault();
        if(title && description && status){
            setAllTasks((task)=>{
                return [...task, {
                    "id": Date.now(),
                    "title": title,
                    "description": description,
                    "priority": "medium",
                    "status": status
                  }]
            })
            setTitle('');
            setDescription('');
        }
    }

    return (
        <form onSubmit={updateState}>
            <input type="text" placeholder="Title*" value={title}
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
            ></input>
            <input type="text" placeholder="Description*" value={description}
                onChange={(e) => {
                    setDescription(e.target.value)
                }}
            ></input>
            <select onChange={(e)=>{
                setStatus(e.target.value)
            }}>
                <option value="todo">Todo</option>
                <option value="in progress">In Progress</option>
                <option value="completed">Done</option>
            </select>
            <button type="submit"> Add New Entry</button>
        </form>
    )

}

export default CreateEntry