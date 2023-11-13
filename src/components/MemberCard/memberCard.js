import { styled } from "styled-components";

export const StyledMemberCard = styled.li`

width: 272px;
height: 262px;
background-color: var(--color-grey-8);
border-radius: 0 0 8px 8px;

.imgContainer{

display: flex;
justify-content: center;
align-items: center;
background-color: ${({primaryColor}) => primaryColor};
height: 35%;
position: relative;
margin-bottom: 64px;
border-radius: 8px 8px 0 0;

}

img{

width: 96px;
height: 96px;
border-radius: 100%;
position: absolute;
top: 50%;

}

.memberInfo {

    display: flex;
    flex-direction: column;
    gap: var(--gap-default);

    h4 {

        font-size: var(--font-size-2);
        color: var(--color-primary);
        font-weight: var(--font-weight-0);

    }

    span {

        color: var(--color-grey-0);
        text-align: center;

    }

}

`