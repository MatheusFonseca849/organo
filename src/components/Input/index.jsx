
const Input = ({label, placeholder, type, required}) => {

    return (

        <div>

            <label htmlFor={label}>{label}</label>
            <input placeholder={placeholder} type={type} id={label} required={required}/>

        </div>

    )

}

export default Input