import React, { Component } from 'react';
import './../App.css';
import Person from './Person';
import Assignment1 from './UserInputOutput/Assignment1';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';

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
        this.setState({
            persons: [
                {id: 1, name: "Sophie", "age": 26},
                {id: 2, name: event.target.value, "age": 129},
                {id: 3, name: "Stephanie", "age": 26}
            ]
        });
    }

    render() {
        const style = {
            backgroundColor: "white",
            border: '1px sold gray',
            boxShadow: '0 2px 3px #ccc',
            cursor: 'pointer',
            padding : '10px'
        }
        return (
            <BrowserRouter>
                <div className="Udemy">
                    {
                        this.state.persons.map(person =>
                            <Person
                                click={this.switchNameHandler.bind(this, 'Maximilian')}
                                key={person.id}
                                name={person.name}
                                changed={this.onChangeHandler}
                                age={person.age}/>
                        )}
                    {/* could be not efficient */}
                    <button
                        style={style}
                        onClick={() => this.switchNameHandler('Alesandro!!!')}>
                        Switch Name
                    </button>
                    <br/> <br/>

                    <Route path="/assignment1" component={Assignment1}></Route>
                    <nav>
                        <NavLink activeClassName="selected" to="/assignment1">Assignment1</NavLink>
                    </nav>
                </div>
            </BrowserRouter>

        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default Udemy;