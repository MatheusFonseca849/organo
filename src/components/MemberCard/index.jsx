import { StyledMemberCard } from "./memberCard.js";
import { IoIosCloseCircle } from "react-icons/io";

const MemberCard = ({primaryColor, name, job, image}) => {

    const deleteMember = () => {

        console.log("member was deleted")

    }

    return (
        
        <StyledMemberCard $primaryColor={primaryColor}>
            <button onClick={deleteMember}><IoIosCloseCircle size={24}  /></button>
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