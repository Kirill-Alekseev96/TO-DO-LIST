function Button (props) {

    const {
        className,
        type,
    } = props;

    return (
        <button className={` button ${className}`} type={type}>Add</button>
    )
}

export default Button