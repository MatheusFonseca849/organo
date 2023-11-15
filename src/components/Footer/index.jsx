import { StyledFooter } from "./footer.js";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {

return (

    <StyledFooter>
        <div className="links">
            <a href="https://github.com/MatheusFonseca849/organo/tree/main" target="blank"><FaGithub size={32} color="white"/></a>
            <a href="https://www.linkedin.com/in/matheus-guilherme-da-fonseca-iizuka-a7b776234" target="blank"><FaLinkedin size={32} color="white" /></a>
        </div>

        <div className="footerImgContainer">

            <img src="./src/assets/logo.svg" alt="organo" />

        </div>

        <div className="footerText">

            <h2>Desenvolvido por Matheus Guilherme da Fonseca</h2>

        </div>


    </StyledFooter>

)

}

export default Footer