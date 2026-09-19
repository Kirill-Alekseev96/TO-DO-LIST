import { useState } from "react";
import Button from "./Button"
import Field from "./Field"
import { useDispatch } from "react-redux";
import { addTasks } from "../store/slice/tasksSlice.js";

function AddTaskForm () {

    const [newTaskTitle, setNewTaskTitle] = useState('');

    const dispatch = useDispatch();

    const handleAddTask  = () => {

        if(newTaskTitle.trim().length > 0  ) {
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false,
                description: null,
            }
            dispatch(addTasks(newTask));
            setNewTaskTitle('');
        }
    }

    const onSubmit = (event) => {
        event.preventDefault()
        handleAddTask()
    }

    return (
        <form className="todo__form" onSubmit = {onSubmit}>
            <Field
               className = 'todo__field'
               label = "new task title"
               id = 'new-task'
               type = 'text'
               value = {newTaskTitle}
               onTaskInput = {setNewTaskTitle}
            />
            <Button 
            type='submit'
            text = 'Add'
            />
        </form>
    )
}

export default AddTaskForm