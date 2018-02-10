import React from 'react';
import Contact from "../Components/Contact";

function ContactSection(props) {
    return (
        <section>
            {props.contacts.map(contact =>
                    <div key={contact.id}>
                        <Contact key={contact.id} item={contact}/>
                        <br/>
                    </div>
                )}
        </section>
    );

}
export default ContactSection;
