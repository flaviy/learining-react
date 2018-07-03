import React, { Component } from 'react';
import Assignment1 from './UserInputOutput/Assignment1';
import Assignment2 from './Assignment2/Assignment2';
//import Radium, {StyleRoot} from 'radium';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import Persons from "./Persons/Persons";
import Cockpit from "./Cockpit/Cockpit";

class Udemy extends Component {
    state = {
        persons : [
            {id: 1, name : "Max", "age" : 28},
            {id: 2, name : "Manu", "age" : 29},
            {id: 3, name : "Stephanie", "age" : 26}
        ],
        showPersons : false
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

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons : !doesShow})
    }

    onChangeHandler = (event, id) =>  {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id = id;
        })

        const person = {...this.state.persons[personIndex]};
        //another way
        //const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;
        const persons = [...this.state.persons]
        persons[personIndex] = person;
        this.setState({
            persons: persons
        });
    }

    deletePersonHandler = (personIndex) =>  {
        //2 ways to create a copy of array
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({persons : persons});
    }

    render() {
        let persons = null;
        if(this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.onChangeHandler}
                />
            );
        }

        return (
            <BrowserRouter>
                <div className="Udemy">
                    <Cockpit
                        showPersons = {this.state.showPersons}
                        persons={this.state.persons}
                        clicked = {this.togglePersonsHandler}
                    />
                    <Route path="/assignment1" component={Assignment1}></Route>
                    <Route path="/assignment2" component={Assignment2}></Route>
                    <nav>
                        <NavLink activeClassName="selected" to="/assignment1">Assignment1</NavLink><br/>
                        <NavLink activeClassName="selected" to="/assignment2">Assignment2</NavLink>
                    </nav>
                    {persons}
                </div>
            </BrowserRouter>

        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default Udemy;