import React from "react";

const Input = (props) => {
    return (
<div className="w-80 h-28 p-4 xl:w-full">
            <input
                onChange={props.onChange}
                type="text"
                placeholder={props.name}
                className="border-2 border-neutral-500 rounded-xl focus:outline-none focus:border-blue-500 w-full h-full text-neutral-500 p-2 "
            />
        </div>
    );
};

export default Input;