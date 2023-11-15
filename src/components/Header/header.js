import styled from 'styled-components'

export const StyledHeader = styled.header`

background-color: var(--color-primary);
display: flex;
justify-content: space-between;
padding: 16px 24px;
width: 100%;

.firstColumn{

    display: flex;
    flex-direction: column;
    gap: var(--gap-header);

    img{
        width: var(--width-logo);
    }

    div {
        h1{
            font-size: var(--font-size-title);
            font-family: var(--font-family-prata);
        }
        
        span{
            font-size: var(--font-size-subtitle);
        }
    }

}

.secondColumn{

    display: none;

}

`