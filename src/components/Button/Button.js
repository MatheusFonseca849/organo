import { styled } from "styled-components";

export const StyledButton = styled.button`

padding: var(--padding-button);
background-color: var(--color-primary);
width: fit-content;
height: fit-content;
color: var(--color-grey-9);
font-weight: var(--font-weight-1);
border-radius: var(--radius-button);

&:hover{

    color: var(--color-hover);

}

`