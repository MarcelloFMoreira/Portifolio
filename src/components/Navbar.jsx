import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import linkedin from "../img/icon_linkedin.png"
import github from "../img/icon_github.png"
import instagram from "../img/icon_insta.png"
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi"
import { FiInstagram } from "react-icons/fi";


const Navbar = () => {
    return (
        <nav class="grid grid-cols-3 gap-2 text-white">
            <div class="m-0"><img src={logo} alt="" /></div>

            <div class="flex justify-between items-center font-quicksand " >
                <Link to="/" class="hover:border-b-2 hover:border-vermelho_primary hover:text-vermelho_primary">HOME</Link>
                <Link to="/sobre" class="hover:border-b-2 hover:border-vermelho_primary hover:text-vermelho_primary">SOBRE</Link>
                <Link to="/projetos" class="hover:border-b-2 hover:border-vermelho_primary hover:text-vermelho_primary">PROJETOS</Link>
                <Link to="contatos" class="hover:border-b-2 hover:border-vermelho_primary hover:text-vermelho_primary">CONTATOS</Link>
            </div>

            <div class="flex gap-6 items-center justify-end mr-20 text-2xl">
                <a  href="https://www.linkedin.com/in/marcello-de-freitas-moreira-879a8a205/"target="_blank"><FiLinkedin /></a>
                <a href="https://github.com/MarcelloFMoreira" target="_blank"><FiGithub/></a>
                <a href="" target="_blank"><FiInstagram /></a>
            </div>
        </nav>
    );
};

export default Navbar
