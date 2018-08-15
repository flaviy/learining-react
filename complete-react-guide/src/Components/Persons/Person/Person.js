import React, {Component} from 'react';
import classes from './Person.css';
import {AuthContext} from "../../Udemy";

class Person extends  Component {

    constructor(props){
        super(props);
        this.inputElement = React.createRef();
    }

    componentDidMount(){
        if(this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    render() {
        return <div className={classes.Person}>
            <AuthContext.Consumer>
                {auth => auth ? "I'm authenticated" : ""}
            </AuthContext.Consumer>
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input
                type="text"
                //reference
                //ref={(inp) => {this.inputElement = inp}}
                ref = {this.inputElement}
                data-id={this.props.id}
                onChange={this.props.changed}
                value={this.props.name}
            />
        </div>
    }
};

export default Person;