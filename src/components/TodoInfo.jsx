function TodoInfo (props) {

    const {
        total,
        done,
        onDeleteAllButtonClick,
    } = props;

    const hasTask = total > 0;

    return (
        <div className="todo__info">
            <div className="todo__total-tasks">
                Done: {done} from{total}
            </div>
            {hasTask && (
                <button onClick = {onDeleteAllButtonClick} className="todo__delete-all-button" type="button">
                    Delete all
                </button>
            )}
        </div>
    )
}

export default TodoInfo