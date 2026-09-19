function Button (props) {

    const {
        className,
        type,
        text,
        onClick,
    } = props;

    return (
        <button onClick={onClick} className={`button ${className}`} type={type}>{text}</button>
    )
}

export default Button