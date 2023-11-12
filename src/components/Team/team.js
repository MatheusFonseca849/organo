import { styled } from "styled-components";

export const StyledTeam = styled.div`
text-align: center;
background-color: ${({secondaryColor}) => secondaryColor};
height: 40vh;
width: 100vw;
padding: 24px 16px;


h3{

    font-size: var(--font-size-1);
    font-family: var(--font-family-prata);
    color: var(--color-grey-0);
    
}

ul{

    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 1;
    gap: 12px;

}

`