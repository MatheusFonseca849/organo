import Team from "../Team";
import { StyledTeamList } from "./teamList.js";

const TeamList = ({ teams, setTeams }) => {

    return (

        <StyledTeamList>

            <div className="tittleContainer">
                <h2>Minha organização</h2>

                <div className="teamListBorder"></div>
            </div>

            {teams.map((team) => {

                return (

                    <Team key={team.name} name={team.name} primaryColor={team.primaryColor} secondaryColor={team.secondaryColor}/>

                )

            })}


        </StyledTeamList>

    )

}

export default TeamList