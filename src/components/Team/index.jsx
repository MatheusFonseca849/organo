import { StyledTeam } from "./team.js";
import MemberCard from "../MemberCard";

const Team = ({name, primaryColor, secondaryColor}) => {

    return (

        <StyledTeam $secondaryColor={secondaryColor}>
            
            <div className="tittleContainer">
            <h3>{name}</h3>
            <div className="tittleBorder"></div>
            </div>


            <ul className="teamMembers">

                <MemberCard primaryColor={primaryColor}/>

            </ul>
        </StyledTeam>

    )


}

export default Team