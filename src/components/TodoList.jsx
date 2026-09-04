import TodoItem from "./TodoItem"

const hasTask = true;



function TodoList ({ tasks, onDeleteButtonClick, onTaskCompleteChange }) {


    if(!hasTask) {
        return <div className="todo__empty-message"></div>
    }

    return (
        <ul className="todo__list">
            
            {tasks.map((task) => (
                <TodoItem
                    key = {task.id}
                    className = 'todo-item'
                    id = {task.id}
                    title = {task.title}
                    isDone = {task.isDone}
                    onDeleteButtonClick = {onDeleteButtonClick}
                    onTaskCompleteChange = {onTaskCompleteChange}
                />
            ))}
        </ul>
        
    )
}

export default TodoList