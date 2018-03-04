import React, { Component } from 'react';
import './../App.css';
import Person from './Person';

class Udemy extends Component {
    state = {
        persons : [
            {id: 1, name : "Max", "age" : 28},
            {id: 2, name : "Manu", "age" : 29},
            {id: 3, name : "Stephanie", "age" : 26}
        ]
    }

    switchNameHandler = () =>  {
        console.log('Button was clicked');
        this.setState({
            persons: [
                {id: 1, name: "Maximillian", "age": 28},
                {id: 2, name: "Manu", "age": 29},
                {id: 3, name: "Stephanie", "age": 26}
            ]
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                {
                    this.state.persons.map( person =>
                    <Person key={person.id} name={person.name} age={person.age}/>
                )}
                <button onClick={this.switchNameHandler}>Switch Name </button>
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default Udemy;