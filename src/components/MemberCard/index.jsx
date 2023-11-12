
const MemberCard = ({primaryColor}) => {

    return (
        <li className="MemberCard">
            <div className="imgContainer">
                <img src="./src/assets/mockImg.jpeg" alt="mockImg" />
            </div>
            <div className="memberInfo">
                <h4>Member Name</h4>
                <span>Member Job</span>
            
            </div>
        </li>

    )

}

export default MemberCard