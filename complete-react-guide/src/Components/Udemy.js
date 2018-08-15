import React, { PureComponent } from 'react';
import Assignment1 from './UserInputOutput/Assignment1';
import Assignment2 from './Assignment2/Assignment2';
//import Radium, {StyleRoot} from 'radium';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import Persons from "./Persons/Persons";
import Cockpit from "./Cockpit/Cockpit";

export const AuthContext = React.createContext(false);

class Udemy extends PureComponent {
    state = {
        persons : [
            {id: 1, name : "Max", "age" : 28},
            {id: 2, name : "Manu", "age" : 29},
            {id: 3, name : "Stephanie", "age" : 26}
        ],
        showPersons : false,
        authenticated:false
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
            return p.id === id;
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

/*
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.persons !== nextState.persons ||
            this.state.showPersons !== nextState.showPersons;
    }
*/

    componentWillUpdate(nextProps, nextState) {
        console.log('Udemy will update', nextProps, nextState);
    }

    loginHandler = () => {
        this.setState({authenticated : true});
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
                    <button onClick={() => this.setState({showPersons : true})}>Show persons</button>
                    <Cockpit
                        showPersons = {this.state.showPersons}
                        persons={this.state.persons}
                        clicked = {this.togglePersonsHandler}
                        login = {this.loginHandler}
                    />
                    <Route path="/assignment1" component={Assignment1}></Route>
                    <Route path="/assignment2" component={Assignment2}></Route>
                    <nav>
                        <NavLink activeClassName="selected" to="/assignment1">Assignment1</NavLink><br/>
                        <NavLink activeClassName="selected" to="/assignment2">Assignment2</NavLink>
                    </nav>
                    <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>
                </div>
            </BrowserRouter>

        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default Udemy;