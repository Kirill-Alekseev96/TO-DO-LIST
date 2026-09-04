import Field from "./Field"

function SearchTaskForm (props) {
    const {
        onSearchInput,
    } = props;
    return (
        <form className="todo__form">
            <Field
                className = 'todo__field'
                label = 'Search task'
                id = 'search-task'  
                type = 'search'       
                onSearchInput = {onSearchInput}   
            />
        </form>
    )
}

export default SearchTaskForm