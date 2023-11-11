const Input = ({label, placeholder, type, required, value, userInput}) => {
    
    const onType = (e) => {
        userInput(e.target.value)
        console.log(value)
    }

    return (


        <div>

            <label htmlFor={label}>{label}</label>
            <input value={value} onChange={onType} placeholder={placeholder} type={type} id={label} required={required}/>

        </div>

    )

}

export default Input