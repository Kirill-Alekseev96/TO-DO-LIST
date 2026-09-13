import { useSelector } from "react-redux";
import TodoItem from "./TodoItem"


function TodoList () {

    const tasks = useSelector(state => state.tasks);

    if(tasks.length === 0) {
        return <div className="todo__empty-message">Задач нет</div>
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
                />
            ))}
        </ul>
        
    )
}

export default TodoList