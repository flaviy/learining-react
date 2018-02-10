import React from 'react';

function Contact(props) {

    return (
        <div>
            <header><strong>{props.item.name}</strong></header>
            <p>
                {props.item.info}
            </p>
            <p>
                {props.item.phone}
            </p>
            <span>{props.item.email}</span>
        </div>
    );

}
export default Contact;
