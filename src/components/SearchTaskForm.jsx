import Field from "./Field"

function SearchTaskForm ({onSetQuery, query} ) {

    return (
        <form className="todo__form">
            <Field
                className = 'todo__field'
                label = 'Search task'
                id = 'search-task'  
                type = 'search'  
                value = {query}
                onTaskInput = {onSetQuery}     
            />
        </form>
    )
}

export default SearchTaskForm