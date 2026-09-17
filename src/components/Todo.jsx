import { useState } from "react";
import AddTaskForm from "./addTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"


function Todo () {
    
    const [query, setQuery] = useState('');    

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm/>
            <SearchTaskForm 
                onSetQuery = {setQuery}
                query = {query}
            />
            <TodoInfo/>
            <TodoList query = {query}/> 
        </div>
    )
}

export default Todo