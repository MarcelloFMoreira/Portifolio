import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi"
import { FiInstagram } from "react-icons/fi";


const Navbar = () => {
    return (
        <nav class="lg:grid lg:grid-cols-3 lg:gap-2 text-white">
            <div class="m-0 flex justify-center lg:justify-normal"><img src={logo} /></div>

            <div class="flex lg:justify-between lg:items-center justify-center gap-5 lg:gap-2" >
                <Link to="/" class="hover:border-b-2 hover:border-vermelho_primary hover:text-vermelho_primary">HOME</Link>
                <Link to="/sobre" class="hover:border-b-2 hover:border-vermelho_primary hover:text-vermelho_primary">SOBRE</Link>
                <Link to="/projetos" class="hover:border-b-2 hover:border-vermelho_primary hover:text-vermelho_primary">PROJETOS</Link>
                <Link to="contatos" class="hover:border-b-2 hover:border-vermelho_primary hover:text-vermelho_primary">CONTATOS</Link>
            </div>

            <div class="flex gap-6 items-center lg:justify-end lg:mr-20 text-2xl justify-center mt-3 lg:mt-0">
                <a  href="https://www.linkedin.com/in/marcello-de-freitas-moreira-879a8a205/"target="_blank"><FiLinkedin /></a>
                <a href="https://github.com/MarcelloFMoreira" target="_blank"><FiGithub/></a>
                <a href="" target="_blank"><FiInstagram /></a>
            </div>
        </nav>
    );
};

export default Navbar
