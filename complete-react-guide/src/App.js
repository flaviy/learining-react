import React, {Component} from 'react';
import './App.css';
import logo from './logo.svg';
import HomePage from './Components/HomePage';
import ContactList from './Components/ContactList';
import Udemy from './Components/Udemy';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';


class App extends Component {

    render() {
        return (

            <BrowserRouter>
                <div className="App">
                    <h1>Hello DevMeetings!</h1>
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </div>
                    <br/>
                    <nav>
                        <NavLink activeClassName="selected"  to="/home">Home</NavLink> &nbsp;
                        <NavLink activeClassName="selected" to="/contacts">Contacts</NavLink> &nbsp;
                        <NavLink activeClassName="selected" to="/udemy">Udemy</NavLink>
                    </nav>
                    <br/>
                    <Route path="/home" component={HomePage}></Route>
                    <Route path="/contacts" component={ContactList}></Route>
                    <Route path="/udemy" component={Udemy}></Route>
                </div>
            </BrowserRouter>
        );
    };
}

export default App;
