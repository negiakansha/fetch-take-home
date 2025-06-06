const InputField = ({type, id, className, placeholder}) => {
    return (
        <input
            type={type}
            id={id}
            className={className}
            placeholder={placeholder}
        />
    );
}

export default InputField;