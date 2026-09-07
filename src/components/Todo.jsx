import { useState } from "react"
import AddTaskForm from "./addTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"


function Todo () {

    const [tasks, setTasks] = useState(
        [
            {id: 'task-1', title: 'Купить молока', isDone: false},
            {id: 'task-2', title: 'Погладить кода', isDone: true},
        ]
    )

    const [newTaskTitle, setNewTaskTitle] = useState('');

    const deleteAllTasks = () => {
        console.log("Удаляем все задачи");
    }

    const deleteTask = (taskId) => {

        setTasks(tasks.filter((task) => task.id !== taskId));
    }

    const toggleTaskComplete = (taskId, isDone) => {
        console.log(`Задача ${taskId} ${isDone ? 'выполнена' : 'не выполнена'}`)
    }


    const filterTasks = (query) => {
        console.log(`Поиск ${query}`);
    }

    const addTask = () => {

        if(newTaskTitle.trim().length > 0  ) {
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false
            }
            setTasks([...tasks, newTask]);
            setNewTaskTitle('');
        }
    }

    


    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm 
                addTask = {addTask}
                newTaskTitle = {newTaskTitle}
                setNewTaskTitle = {setNewTaskTitle}
            />
            <SearchTaskForm onSearchInput = {filterTasks}/>
            <TodoInfo 
                total = {tasks.length}
                done = {tasks.filter((task) => task.isDone).length}
                onDeleteAllButtonClick = {deleteAllTasks}
            />
            <TodoList 
                tasks = {tasks}
                onDeleteButtonClick = {deleteTask}
                onTaskCompleteChange = {toggleTaskComplete}
            /> 
        </div>
    )
}

export default Todo