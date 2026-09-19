import { useSelector } from "react-redux";
import TodoItem from "./TodoItem"

function TodoList ({query}) {


    const tasks = useSelector(state => state.tasks);

    const filteredTasks = query.length > 0 ? tasks.filter((task) => task.title.toLowerCase().includes(query.toLowerCase())) : tasks;


    if(filteredTasks.length === 0) {
        return <div className="todo__empty-message">Задач нет</div>
    }

    return (
        <ul className="todo__list">
            
            {filteredTasks.map((task) => (
                <TodoItem
                    key = {task.id}
                    className = 'todo-item'
                    id = {task.id}
                    title = {task.title}
                    isDone = {task.isDone}
                    description = {task.description}
                    query = {query}
                />
            ))}
        </ul>
        
    )
}

export default TodoList