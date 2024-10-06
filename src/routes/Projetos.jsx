import React from "react";
import Component_project from "../components/Component_project";
import Exemplo from "../img/exemplo.png";

const Projetos = () => {
  return (
    <div>
      <h1 className="text-white font-quicksand text-center text-3xl font-bold mt-6 mb-2">
        PROJETOS
      </h1>
      <div className="grid grid-cols-2">
        {/* Fechamento correto da tag e ajuste de class para className */}
        <Component_project
          img={Exemplo}
          texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          link={"/detalhes_projeto"}
        />
        <Component_project
          img={Exemplo}
          texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          link={"/detalhes_projeto"}
        />
        <Component_project
          img={Exemplo}
          texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          link={"/detalhes_projeto"}
        />
        <Component_project
          img={Exemplo}
          texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          link={"/detalhes_projeto"}
        />
      </div>
    </div>
  );
};

export default Projetos;
