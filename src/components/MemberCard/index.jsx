import { StyledMemberCard } from "./memberCard.js";

const MemberCard = ({primaryColor, name, job, image}) => {

    return (
        
        <StyledMemberCard $primaryColor={primaryColor}>
            <div className="imgContainer">
                <img src={image} alt={name} />
            </div>
            <div className="memberInfo">
                <h4>{name}</h4>
                <span>{job}</span>
            
            </div>
        </StyledMemberCard>

    )

}

export default MemberCard