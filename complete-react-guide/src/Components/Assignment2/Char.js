import React  from "react";

const Char = ( props ) => {
    return (
        <span className="char" onClick={props.click}>
            {props.char}
        </span>
    )
};

export default Char;