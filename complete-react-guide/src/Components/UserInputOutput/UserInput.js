import React from 'react';
//import './Person.css';

const userInput = ( props ) => {
    return (
        <div className="userInput">
            <input type="text" data-id={props.id} onChange={props.changed} value={props.name} key={`input_${props.key}`} />
        </div>
    )
};

export default userInput;