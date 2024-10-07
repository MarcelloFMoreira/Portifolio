import React from "react";
import Exemplo from "../img/exemplo.png";

const Detalhesprojeto = () => {

    return (
        <>
            <div className="2xl:grid 2xl:grid-cols-2">
                <div className="flex 2xl:items-center justify-center mt-28 2xl:mt-0">
                    <img src={Exemplo} className="2xl:flex 2xl:mt-40 w-1/2"></img>
                </div>
                <div>
                    <div className="2xl:grid 2xl:grid-rows-2 2xl:mr-40 mt-11 flex flex-col ">
                    <h1 className="text-white font-quicksand-bold 2xl:mt-8 font-bold text-5xl text-center">Titulo exemplo</h1>
                    <p className="text-white 2xl:text-lg m-36 2xl:m-0 text text-xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsam recusandae maxime ad voluptate nostrum aliquid magnam placeat, possimus, saepe alias cum amet adipisci facilis tempora? Nobis iure fugiat neque!
                    Ab doloribus facere culpa a, corporis hic ipsum repellendus pariatur cum, cumque quae saepe architecto dolorem expedita voluptatem. Perspiciatis est veniam nobis earum quod quos incidunt repellendus. Omnis, accusantium quo!
                    Quae molestias quam eaque labore dicta ipsa itaque quod tempore fugit voluptates sunt, nulla soluta ea pariatur quas, laborum deleniti consectetur? Architecto eos ducimus accusantium repudiandae. Blanditiis quibusdam explicabo repudiandae.</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Detalhesprojeto;