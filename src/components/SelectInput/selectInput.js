import { styled } from "styled-components";

export const StyledSelectInput = styled.div`

display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 12px;
width: 100%;

label {

    font-size: var(--font-size-2);
    font-weight: 700;
    color: var(--grey-0);

}

select {

    padding: var(--padding-input);
    color: var(--color-grey-3);
    border-radius: var(--radius-input);
    box-shadow: var(--input-shadow);

}

`