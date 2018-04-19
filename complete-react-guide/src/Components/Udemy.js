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

    switchNameHandler = (newName) =>  {
        console.log('Button was clicked');
        this.setState({
            persons: [
                {id: 1, name: newName, "age": 28},
                {id: 2, name: "Manu", "age": 29},
                {id: 3, name: "Stephanie", "age": 26}
            ]
        });
    }

    onChangeHandler = (event) =>  {
        console.log(event.target.dataId);
        this.setState({
            persons: [
                {id: 1, name: "Sophie", "age": 26},
                {id: 2, name: event.target.value, "age": 129},
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
                    <Person
                        click={this.switchNameHandler.bind(this, 'Maximilian')}
                        key={person.id}
                        name={person.name}
                        changed={this.onChangeHandler}
                        age={person.age}/>
                )}
                {/* could be not efficient */}
                <button onClick={() => this.switchNameHandler('Alesandro!!!')}>Switch Name </button>
                <br/> <br/>
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default Udemy;