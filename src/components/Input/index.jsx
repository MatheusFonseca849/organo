import { StyledInput } from "./input.js"

const Input = ({label, placeholder, type, required, value, userInput}) => {
    
    const onType = (e) => {
        userInput(e.target.value)
        console.log(value)
    }

    return (


        <StyledInput>

            <label htmlFor={label}>{label}</label>
            <input value={value} onChange={onType} placeholder={placeholder} type={type} id={label} required={required}/>

        </StyledInput>

    )

}

export default Input