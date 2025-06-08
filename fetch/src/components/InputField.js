const InputField = ({type, id, value, placeholder, onChange}) => {
    return (
        <input
            type={type}
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}

export default InputField;