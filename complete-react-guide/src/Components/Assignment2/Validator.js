import React  from "react";

const Validator = ( props ) => {
    const MIN_LENGTH = 5;
    return (
        <div className="validator">
            {props.length && props.length >= MIN_LENGTH ? 'Text long enough' : 'Text too short' }
        </div>
    )
};

export default Validator;