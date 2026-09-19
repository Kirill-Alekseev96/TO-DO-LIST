import { useDispatch, useSelector } from "react-redux";
import { deleteAllTasks } from "../store/slice/tasksSlice";

function TodoInfo () {

    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    const total = tasks.length;
    const done = tasks.filter(task => task.isDone).length;

    const hasTask = total > 0;

    const handleDeleteAll = () => {
        dispatch(deleteAllTasks());
    }

    return (
        <div className="todo__info">
            <div className="todo__total-tasks">
                Done: {done} from{total}
            </div>
            {hasTask && (
                <button  className="todo__delete-all-button" type="button" onClick = {handleDeleteAll}>
                    Delete all
                </button>
            )}
        </div>
    )
}

export default TodoInfo