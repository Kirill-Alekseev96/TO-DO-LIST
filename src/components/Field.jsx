function Field (props) {

  const {
    className,
    id,
    label,
    type,
    onSearchInput,
    value,
  } = props;

    return(
        <div className = {`field ${className}`}>
          <label
            className="field__label"
            htmlFor = {id}
          >
            {label}
          </label>
          <input
            className="field__input"
            id = {id}
            placeholder=" "
            autoComplete="off"
            type = {type}
            value={value}
            onInput = {(evt)=> onSearchInput(evt.target.value)}
          />
        </div>
    )
}

export default Field