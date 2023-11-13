import { StyledMemberCard } from "./memberCard.js";

const MemberCard = ({primaryColor}) => {

    return (
        <StyledMemberCard primaryColor={primaryColor}>
            <div className="imgContainer">
                <img src="./src/assets/mockImg.jpeg" alt="mockImg" />
            </div>
            <div className="memberInfo">
                <h4>Member Name</h4>
                <span>Member Job</span>
            
            </div>
        </StyledMemberCard>

    )

}

export default MemberCard