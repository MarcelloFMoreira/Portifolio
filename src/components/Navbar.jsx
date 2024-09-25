import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import linkedin from "../img/icon_linkedin.png"
import github from "../img/icon_github.png"
import instagram from "../img/icon_insta.png"


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

            <div class="flex gap-6 items-center justify-end mr-20">
                <a  href=""><img src={linkedin} alt="" /></a>
                <a href=""><img src={github} alt="" /></a>
                <a href=""><img src={instagram} alt="" /></a>
            </div>
        </nav>
    );
};

export default Navbar
