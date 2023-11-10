
const Input = ({label, placeholder, type, required, name}) => {
    


    return (


        <div>

            <label htmlFor={label}>{label}</label>
            <input value={name}  placeholder={placeholder} type={type} id={label} required={required}/>

        </div>

    )

}

export default Input