import React from "react";
import Foto from "../img/foto_minha.png"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div class="lg:grid lg:grid-cols-2 lg:gap-4 ">
            <div class="lg:m-auto">
            <h1 class="text-white text-5xl font-quicksand lg:mb-4 font-bold mt-44 text-center">Olá, eu sou o Marcello, </h1>
            <h2 class="font-quicksand text-vermelho_primary text-5xl font-bold text-center">Dev Full stack</h2>
                <div class="mt-20 flex justify-center gap-2">
                    <Link to="/projetos" class=" border-2 border-white text-white rounded-3xl pt-2 pb-2 pl-5 pr-5 lg:mr-10 hover:bg-vermelho_primary hover:border-0 hover:shadow-md hover:shadow-vermelho_primary " >Projetos</Link>
                    <Link to="/contatos" class=" border-2 border-white text-white rounded-3xl pt-2 pb-2 pl-5 pr-5 lg:mr-10 hover:bg-vermelho_primary hover:border-0 hover:shadow-md hover:shadow-vermelho_primary " >Entre em contato</Link>
                </div>
            </div>
            <div class="mt-20 lg:ml-20 flex justify-center">
            <img src={Foto} alt="Foto perfil" />
            </div>
        </div>
    );
};


export default Home