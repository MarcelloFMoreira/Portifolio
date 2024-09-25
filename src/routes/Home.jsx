import React from "react";
import Foto from "../img/foto_minha.png"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div class="grid grid-cols-2 gap-4 ">
            <div class="m-auto">
            <h1 class="text-white text-5xl font-quicksand mb-4 font-bold">Olá, eu sou o Marcello, </h1>
            <h2 class="font-quicksand text-vermelho_primary text-5xl font-bold">Dev Full stack</h2>
                <div class="mt-20">
                    <Link to="/projetos" class="border-2 border-white text-white rounded-3xl pt-2 pb-2 pl-5 pr-5 mr-10 hover:bg-vermelho_primary hover:border-0 hover:shadow-md hover:shadow-vermelho_primary " >Projetos</Link>
                    <button class="border-2 border-white text-white rounded-3xl pt-2 pb-2 pl-5 pr-5 mr-10 hover:bg-vermelho_primary hover:border-0 hover:shadow-md hover:shadow-vermelho_primary " >Entre em contato</button>
                </div>
            </div>
            <div class="mt-20 ml-20">
            <img src={Foto} alt="Foto perfil" />
            </div>
        </div>
    );
};


export default Home