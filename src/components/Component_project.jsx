import React from "react";
import Exemplo from "../img/exemplo.png"


const Component_project = () => {
    return (

        <div class="p-10 m-auto">  
            <div class="bg-vermelho_primary w-96 h-56 rounded-3xl grid grid-cols-2 p-2">
            <img src={Exemplo} class="bg-vermelho_primary h-40 m-auto" />
            <p class="text-white bg-vermelho_primary text-center items-center flex">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>
        </div>
    );
};

export default Component_project
