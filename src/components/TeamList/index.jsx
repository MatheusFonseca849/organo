import Team from "../Team";
import { StyledTeamList } from "./teamList.js";
import { v4 as uuid } from "uuid";

const TeamList = ({ teams, setTeams }) => {

    return (

        <StyledTeamList>

            <div className="tittleContainer">
                <h2>Minha organização</h2>

                <div className="teamListBorder"></div>
            </div>

            {teams.map((team) => {
                return (

                    team.members.length > 0 &&
                    <Team key={uuid()} name={team.name} primaryColor={team.primaryColor} secondaryColor={team.secondaryColor} team={team} teamMembers={team.members}/>

                )

            }
            
            )}

        </StyledTeamList>

    )

}

export default TeamList