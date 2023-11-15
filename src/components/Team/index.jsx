import { StyledTeam } from "./team.js";
import MemberCard from "../MemberCard";
import { v4 as uuid } from "uuid";

const Team = ({name, primaryColor, secondaryColor, team,  teamMembers}) => {

    return (
    
     <StyledTeam $primaryColor={primaryColor} $secondaryColor={secondaryColor}>
            
            <div className="tittleContainer">
            <h3>{name}</h3>
            <div className="tittleBorder"></div>
            </div>


            <ul className="teamMembers">
    
                {

                    teamMembers.map((member) => <MemberCard key={uuid()} primaryColor={primaryColor} name={member.name} job={member.job} image={member.image}/>)

                }


            </ul>
        </StyledTeam>

    )


}

export default Team