import React, {Component} from 'react';
import UserOutput from  './UserOutput';
import UserInput from  './UserInput';
import './User.css';

class Assignment1 extends Component {
    state = {
        users : [
            {id : 1, name : 'Alexandr', age : 23, children : 1},
            {id : 2, name : 'Oleg', age : 27, children : 12},
        ]
    }

    onChangeHandler = (event) => {
        let userId = event.target.getAttribute('data-id');
        let users = this.state.users.map(user => {
            user.name = (user.id === userId * 1) ? event.target.value : user.name;
            return user;
        });
        this.setState({
            users: users
        });
        return true;
    }
    render() {
        const style = {
            backgroundColor: "yellow",
            border: '1px sold gray',
            boxShadow: '0 2px 3px #ccc',
            padding : '10px',
            margin:'auto',
            width: '300px'
        }

        return (
            <section className="Assignment1">
                {
                    this.state.users.map( user =>
                        <div style={style} className="User">
                            <UserOutput
                                name={user.name}
                                age={user.age}
                                children={user.children}
                            />
                            <UserInput
                                name={user.name}
                                id={user.id}
                                changed={this.onChangeHandler}
                            />
                        </div>
                    )
                }
            </section>
        );
    };
}

export default Assignment1;
