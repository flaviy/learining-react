import React, {Component} from 'react';
import './App.css';
import logo from './logo.svg';
import ContactSection from './Components/ContactSection';
import contacts from './Mocs/ContactList';


class App extends Component {
    state  = {
        filteredContacts : contacts,
        currentFilter : null,
        sortOrder : null
    }
    render() {
        return (
            <section className="App">
                <h1>Hello DevMeetings!</h1>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </div>
                <br/>
                <div>
                    <input onChange={this.handleInputChange} />
                    <button onClick={this.handleSortClick}>
                        Sort {!this.state.sortOrder || this.state.sortOrder === 'desc' ? 'asc' : 'desc'}
                    </button>
                </div>
                <div>

                    <h1>Featured Contacts</h1>
                    <ContactSection key="favoriteContacts"
                                    contacts={this.state.filteredContacts.filter(contact => contact.tags.includes('favorite'))}/>
                </div>
                <br/>
                <div>
                    <h1>Other Contacts</h1>
                    <ContactSection key="otherContacts"
                                    contacts={this.state.filteredContacts.filter(contact => !contact.tags.includes('favorite'))}/>
                </div>
                <br/>
            </section>
        );
    };

    handleInputChange = (event) => {
        let filteredContacts = contacts.filter(
            contact => contact.name.startsWith(event.target.value)
        );
        this.setState({
            currentFilter : event.target.value,
            filteredContacts : filteredContacts
        });
    }

    sortContacts = (contacts) => {

        contacts.sort((firstContact, secondContact) => {
                if (firstContact.name > secondContact.name) {
                    return (!this.state.sortOrder ||  this.state.sortOrder === 'desc') ? 1 : -1;
                }
                if (firstContact.name < secondContact.name) {
                    return this.state.sortOrder === 'asc' ? 1 : -1;
                }
                return 0;
            });
        return contacts;
    }


    handleSortClick = (event) => {

        this.setState({
            sortOrder : (!this.state.sortOrder ||  this.state.sortOrder === 'desc') ? 'asc' : 'desc',
            filteredContacts : this.sortContacts(this.state.filteredContacts)
        });
    }
}

export default App;
