import React from 'react';
//import './Person.css';

const UserOutput = ( props ) => {
    return (
        <div className="userOutput" key={`output_${props.key}`}>
            <p>User 1 : {props.name}! Age : {props.age}</p>
            <p>Children: {props.children}</p>
        </div>
    )
};

export default UserOutput;