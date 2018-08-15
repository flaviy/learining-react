import React from 'react';
import classes from "./Cockpit.css";

const cockpit = (props) => {

/*    const style = {
        backgroundColor: "green",
        border: '1px sold gray',
        boxShadow: '0 2px 3px #ccc',
        cursor: 'pointer',
        padding : '10px',
        //Only with Radium
        /!*            ':hover' : {
                        backgroundColor : 'lightgreen',
                        border: '2px solid gray',
                    },
                    '@media (min-width : 500px)' : {
                        width : '450px'
                    }*!/
    }*/

    const joinedClasses = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.red;
    }
    if (props.persons.length <= 2) {
        joinedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        joinedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <button
                className={btnClass}
                onClick={props.clicked}
            >
                Toggle Persons
            </button>
            <br/><br/>
            <div className={joinedClasses.join(' ')}> It's really work!</div>

            <br/>
            <button onClick={props.login}>Log In</button>
        </div>
    )
}
export default cockpit;