import { StyledMemberCard } from "./memberCard.js";
import { IoIosCloseCircle } from "react-icons/io";

const MemberCard = ({primaryColor, memberInfo, id, name, job, image, teams, setTeams}) => {

    
    const deleteMember = () => {

        setTeams(teams.map((team) => team.members.includes(memberInfo) ? {...team, members: [team.members.filter((member) => member.id !== id)]} : team))

        // Currently, this function is updating the state but not the DOM. Maybe uplifting it to the father component?

    }

    return (
        
        <StyledMemberCard key={id} $primaryColor={primaryColor}>
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