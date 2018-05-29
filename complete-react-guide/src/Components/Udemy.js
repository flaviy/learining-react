import React, { Component } from 'react';
import './../App.css';
import Person from './Person';
import Assignment1 from './UserInputOutput/Assignment1';
import Assignment2 from './Assignment2/Assignment2';
import Radium, {StyleRoot} from 'radium';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';

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
        const style = {
            backgroundColor: "green",
            border: '1px sold gray',
            boxShadow: '0 2px 3px #ccc',
            cursor: 'pointer',
            padding : '10px',
            ':hover' : {
                backgroundColor : 'lightgreen',
                border: '2px solid gray',
            },
            '@media (min-width : 500px)' : {
                width : '450px'
            }
        }
        let persons = null;
        if(this.state.showPersons) {
            persons = this.state.persons.map((person, index) =>
                <Person
                    click={() => this.deletePersonHandler(index)}
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    changed={(event) => this.onChangeHandler(event, person.id)}
                />
            )
            style.backgroundColor = 'red';
        }
        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <BrowserRouter>
                <StyleRoot>
                    <div className="Udemy">
                        <button
                            style={style}
                            //onClick={() => this.switchNameHandler('Alesandro!!!')}
                            onClick={this.togglePersonsHandler}
                        >
                            Show Persons
                        </button>
                        <br/><br/>
                        <div className={classes.join(' ')}> It's really work!</div>

                        {/*      {this.state.showPersons ?
                        <div>

                            {this.state.persons.map(person =>
                            <Person
                                click={this.switchNameHandler.bind(this, 'Maximilian')}
                                key={person.id + '-2'}
                                name={person.name + '2'}
                                changed={(event) => this.onChangeHandler(event, person.id)}
                                age={person.age}/>
                            )}
                        </div>
                        : null
                    }*/}
                        <br/>

                        {persons}

                        <Route path="/assignment1" component={Assignment1}></Route>
                        <Route path="/assignment2" component={Assignment2}></Route>
                        <nav>
                            <NavLink activeClassName="selected" to="/assignment1">Assignment1</NavLink><br/>
                            <NavLink activeClassName="selected" to="/assignment2">Assignment2</NavLink>
                        </nav>
                    </div>
                </StyleRoot>
            </BrowserRouter>

        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default Radium(Udemy);