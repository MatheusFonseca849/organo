import { styled } from "styled-components";

export const StyledFooter = styled.footer`

    background-color: var(--color-primary);
    width: 100vw;
    height: var(--height-footer);
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: var(--margin-footer);

    .links{

        display: flex;
        gap: var(--gap-default);

    }

    .footerImgContainer{

       
        display: flex;
        justify-content: center;
        align-items: center;

        img {

            width: var(--width-logo);

        }

    }

    h2{

        color: var(--color-grey-9);
        font-size: var(--font-size-footer);
        font-weight: var(--font-weight-2);
        text-align: center;
        max-width: 200px;

    }

`