import React from "react";
import { Link } from "react-router-dom";

const Component_project = (props) => {
    return (
        <div className="p-10 m-auto">
            <Link to={props.link} className="bg-vermelho_primary w-96 h-60 rounded-3xl grid grid-cols-2 p-2">
                <img src={props.img} className="bg-vermelho_primary h-40 m-auto" alt="project" />
                <p className="text-white bg-vermelho_primary text-center items-center flex">
                    {props.texto}
                </p>
                <p className="text-white bg-vermelho_primary text-center items-center flex mt-2">Clique para ver mais detalhes</p>
            </Link>
        </div>
    );
};

export default Component_project;
