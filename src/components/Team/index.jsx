import { StyledTeam } from "./team.js";
import MemberCard from "../MemberCard";

const Team = ({name, primaryColor, secondaryColor, team,  teamMembers, setMembers}) => {

    console.log(team)
    return (
    
     <StyledTeam $secondaryColor={secondaryColor}>
            
            <div className="tittleContainer">
            <h3>{name}</h3>
            <div className="tittleBorder"></div>
            </div>


            <ul className="teamMembers">
    
                {

                    teamMembers.map((member) => <MemberCard key={name} primaryColor={primaryColor} name={member.name} job={member.job} image={member.image}/>)

                }


            </ul>
        </StyledTeam>

    )


}

export default Team