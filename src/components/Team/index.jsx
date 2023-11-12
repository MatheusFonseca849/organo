import { StyledTeam } from "./team.js";
import MemberCard from "../MemberCard";

const Team = ({name, primaryColor, secondaryColor}) => {

    return (

        <StyledTeam primaryColor={primaryColor} secondaryColor={secondaryColor}>
            <h3>{name}</h3>

            <ul className="teamMembers">

                {/* <MemberCard primaryColor={primaryColor}/> */}

            </ul>
        </StyledTeam>

    )


}

export default Team