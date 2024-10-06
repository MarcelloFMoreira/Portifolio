import React from "react";
import Exemplo from "../img/exemplo.png";

const Detalhesprojeto = () => {

    return (
        <>
            <div className="grid grid-cols-2">
                <div className="flex items-center justify-center">
                    <img src={Exemplo} className="flex mt-40 w-1/2"></img>
                </div>
                <div>
                    <div className="grid grid-rows-2 mr-40">
                    <h1 className="text-white font-quicksand-bold mt-8 font-bold text-5xl text-center">Titulo exemplo</h1>
                    <p className="text-white text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsam recusandae maxime ad voluptate nostrum aliquid magnam placeat, possimus, saepe alias cum amet adipisci facilis tempora? Nobis iure fugiat neque!
                    Ab doloribus facere culpa a, corporis hic ipsum repellendus pariatur cum, cumque quae saepe architecto dolorem expedita voluptatem. Perspiciatis est veniam nobis earum quod quos incidunt repellendus. Omnis, accusantium quo!
                    Quae molestias quam eaque labore dicta ipsa itaque quod tempore fugit voluptates sunt, nulla soluta ea pariatur quas, laborum deleniti consectetur? Architecto eos ducimus accusantium repudiandae. Blanditiis quibusdam explicabo repudiandae.</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Detalhesprojeto;