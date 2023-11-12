import { styled } from "styled-components";

export const StyledMemberCard = styled.li`

width: 272px;
height: 262px;
background-color: var(--color-grey-8);

.imgContainer{

display: flex;
justify-content: center;
align-items: center;
background-color: ${({primaryColor}) => primaryColor};
height: 35%;
position: relative;
margin-bottom: 64px;

}

img{

width: 96px;
height: 96px;
border-radius: 100%;
position: absolute;
top: 50%;

}



`