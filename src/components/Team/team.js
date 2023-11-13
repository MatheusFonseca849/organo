import { styled } from "styled-components";

export const StyledTeam = styled.div`
text-align: center;
background-color: ${({ $secondaryColor }) => $secondaryColor};
height: fit-content;
width: 100vw;
padding: var(--padding-team-list);


.tittleContainer{

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: var(--margin-tittle-container);

    h3{

        color: var(--color-grey-0);
        font-size: var(--font-size-1);
        font-family: var(--font-family-prata);
        margin-bottom: var(--margin-tittle);

    }

    div {

        background-color: ${({ primaryColor }) => primaryColor};
        width: var(--width-tittle-border);
        height: var(--height-tittle-border);
        border-radius: var(--radius-tittle-border);

    }

}



ul{

    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 1;
    gap: 12px;

}

`