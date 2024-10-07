import React from "react";
import Code from "../img/code.png"
import Python from "../img/python.png"
import Reactimg from "../img/react.png"
import JS from "../img/js.png"
import Sass from "../img/sass.png"
import Bootstrap from "../img/bootstrap.png"
import Html from "../img/HTML.png"
import Css from "../img/css.png"
import Figma from "../img/figma.png"
import Java from "../img/java.png"
import Tw from "../img/tailwind.png"
import C from "../img/c++.png"




const Sobre = () => {
    return (
        <div>
            <div class="text-center text-white font-quicksand">
                <h1 class="text-3xl font-bold mt-6 mb-20">MAIS SOBRE MIM</h1>
            </div>
            <div class="lg:grid lg:grid-cols-2 gap-4">
                <img src={Code} alt="codigo" class=" flex lg:ml-48 lg:mt-1 ml-auto mr-auto lg:mr-0" />
                <div class="m-20 lg:mt-0 flex text-white font-quicksand text-xl lg:mr-56 justify-center flex-col">
                <p class="  mt-3">Sou um desenvolvedor Full-Stack com conhecimento em diversas tecnologias de desenvolvimento de software como  Pyhton, JavaScript, Java, React, C++, HTML, CSS,  Figma, Sass, Boostrap entre outras.</p> <br/>
                <p class=" flex justify-center">Estou continuamente atualizando minhas habilidades para atender às demandas do mercado tecnológico. Busco oportunidades para aplicar minhas competências de forma inovadora, colaborar com equipes e contribuir para soluções tecnológicas impactantes. Meu objetivo é crescer profissionalmente e enfrentar desafios que promovam meu aprendizado e evolução no desenvolvimento de software.</p>
                </div>
            </div>
            <div className="relative flex gap-1 lg:mt-20 mt-40">
                <img src={Python} className="left-full absolute animate-autoRun delay-1s h-20" />
                <img src={JS} className="left-full absolute animate-autoRun delay-2s h-20" />
                <img src={C} className="left-full absolute animate-autoRun delay-4.5s h-20" />
                <img src={Java} className="left-full absolute animate-autoRun delay-6.5s h-20" />
                <img src={Reactimg} className="left-full absolute animate-autoRun delay-8s h-20" />
                <img src={Html} className="left-full absolute animate-autoRun delay-10s h-20" />
                <img src={Css} className=" left-full absolute animate-autoRun delay-12s h-16" />
                <img src={Bootstrap} className=" left-full absolute animate-autoRun delay-14s h-20" />
                <img src={Tw} className="left-full absolute animate-autoRun delay-16s h-16" />
                <img src={Sass} className="left-full absolute animate-autoRun delay-18s h-20" />
                <img src={Figma} className="left-full absolute animate-autoRun delay-20s h-20" />
            </div>
        </div>
    );
};


export default Sobre