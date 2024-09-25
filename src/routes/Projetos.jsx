import React from "react";
import Component_project from "../components/Component_project";

const Projetos = () => {
    return (
        <div>
            <h1 class="text-white font-quicksand text-center text-3xl font-bold mt-6 mb-2">PROJETOS</h1>
            <div class="grid grid-cols-2">
                <Component_project />
                <Component_project />
                <Component_project />
                <Component_project />
            </div>
        </div>
    );

};

export default Projetos