import { useSelector } from "react-redux";
import TodoItem from "./TodoItem"

function TodoList ({query}) {


    const tasks = useSelector(state => state.tasks);


    const visibleTasks = query.length > 0 ? tasks.filter((task) => task.title.toLowerCase().includes(query.trim().toLowerCase())) : tasks;

    if(visibleTasks.length === 0) {
        return <div className="todo__empty-message">Задач нет</div>
    }

    return (
        <ul className="todo__list">
            
            {visibleTasks.map((task) => (
                <TodoItem
                    key = {task.id}
                    className = 'todo-item'
                    id = {task.id}
                    title = {task.title}
                    isDone = {task.isDone}
                    description = {task.description}
                />
            ))}
        </ul>
        
    )
}

export default TodoList