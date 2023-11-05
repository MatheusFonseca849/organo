import styled from 'styled-components'

export const StyledHeader = styled.header`

background-color: var(--color-primary);
display: flex;
justify-content: space-between;
padding: 16px 24px;

.firstColumn{

    img{
        width: 150px;
    }

    div {
        h1{
            font-size: var(--font-size-title);
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