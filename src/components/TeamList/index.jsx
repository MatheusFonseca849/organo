import Team from "../Team";
import { StyledTeamList } from "./teamList.js";

const TeamList = ({ teams, setTeams, members, setMembers }) => {

    return (

        <StyledTeamList>

            <div className="tittleContainer">
                <h2>Minha organização</h2>

                <div className="teamListBorder"></div>
            </div>

            {teams.map((team) => {

                // let teamMembers = members.filter(member => member.team === team.name)
                // console.log(teamMembers)

                return (
                    
                    <Team key={team.name} name={team.name} primaryColor={team.primaryColor} secondaryColor={team.secondaryColor} team={team} teamMembers={team.members} setMembers={setMembers}/>

                )

            }
            
            )}


        </StyledTeamList>

    )

}

export default TeamList