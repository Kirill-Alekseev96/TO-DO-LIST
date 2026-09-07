import Button from "./Button"
import Field from "./Field"

function AddTaskForm (props) {
    const {
        addTask,
        newTaskTitle,
        setNewTaskTitle
    }= props

    const onSubmit = (event) => {
        event.preventDefault()
        addTask()
    }

    return (
        <form className="todo__form" onSubmit = {onSubmit}>
            <Field
               className = 'todo__field'
               label = "new task title"
               id = 'new-task'
               type = 'text'
               value = {newTaskTitle}
               onSearchInput = {setNewTaskTitle}
            />
            <Button type='submit'/>
        </form>
    )
}

export default AddTaskForm