import Team from "../Team";

const TeamList = ({teams, setTeams}) => {

    return (

        <section>
            <h2>Minha organização</h2>

            {teams.map((team) => {

                return (

                    <Team name={team.name}/>

                )

            })}
            

        </section>

    )

}

export default TeamList