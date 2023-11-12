import MemberCard from "../MemberCard";

const Team = ({name}) => {

    return (

        <div className="teamList">
            <h3>{name}</h3>

            <ul className="teamMembers">

                <MemberCard></MemberCard>

            </ul>
        </div>

    )


}

export default Team