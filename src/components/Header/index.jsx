import { StyledHeader } from "./header"

const Header = () => {

    return (

        <StyledHeader>
            <div className="firstColumn">
                <img src="./src/assets/logo.svg" alt="organo" />
                <div className="headerTitle">
                    <h1>Pessoas e times</h1>
                    <span>organizados em um só lugar</span>
                </div>
            </div>
            <div className="secondColumn">
                <img src="./src/assets/headerImg.svg" alt="header image" />
            </div>
        </StyledHeader>

    )


}

export default Header