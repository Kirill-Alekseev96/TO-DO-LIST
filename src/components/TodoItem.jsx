import { useDispatch } from "react-redux";
import { deleteTasks, toggleTask } from "../store/slice/tasksSlice";
import DescriptionTask from "./descriptionTask";
import { useState } from "react";

function TodoItem (props) {

  const {
    className,
    id,
    title,
    isDone,
  } = props


  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState(null);

  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTasks(id));
  }

  const handleChangeTask = () => {
    dispatch(toggleTask(id));
  }


  const handleDescription = () => {
    setIsOpen(!isOpen);
  }

    return (
      <>
        <li className={`todo__item ${className}`}>
          <input
            onChange={handleChangeTask}
            className="todo-item__checkbox"
            id={id}
            type="checkbox"
            checked = {isDone}
          />
          <label
            className="todo-item__label"
            htmlFor = {id}
          >
            {title}
          </label>

          <button
            onClick = {handleDescription}
            className="todo-item__delete-button"
            aria-label="Delete"
            title="Delete"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 20h9"
                stroke="#757575"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                stroke="#757575"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>


          <button
            onClick = {handleDeleteTask}
            className="todo-item__delete-button"
            aria-label="Delete"
            title="Delete"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="#757575"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>

        {isOpen && <DescriptionTask description = {description} onChangeDescription = {setDescription} id = {id}/>}
       </> 
    )
}

export default TodoItem