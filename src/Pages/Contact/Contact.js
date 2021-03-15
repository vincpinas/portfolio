import React from 'react'
import './Contact.css'
import Alert from '../../Components/Alert/Alert'
import RubberSpan from '../../Components/RubberSpan/RubberSpan'

function Contact() {
    return (
        <div className="contact">
            <div className="c-alert-container">
                <Alert text="Not much to see yet.." timer={4500} delay={0}/>
            </div>
            <div className="contact-header">
                <div>
                    <RubberSpan letters="Contact" margin={10} hero={true}/>
                    <RubberSpan letters="Me" hero={true}/>
                </div>
                <p>I am interested in all front end work, but if you have any questions for me personally just hit me up 🙂</p>
            </div>
        </div>
    );
}

export default Contact;