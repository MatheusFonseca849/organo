import { StyledButton } from "./button.js";

const Button = (props) => {

    return(

        <StyledButton>
            {props.children}
        </StyledButton>

    )

}

export default Button