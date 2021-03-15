import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import selfie from './selfie.jpeg'
import Alert from '../../Components/Alert/Alert'

function About() {
    return (
        <div className='about'>
            <div className="c-alert-container">
                <Alert text="Still have questions?" timer={4500} delay={0}/>
                <Alert text="Contact me for answers 😄" timer={4500} delay={60}/>
            </div>
                <div className="containerAbout">
                    <div className="topbar">
                        <div className="circles">
                            <Link to="/portfolio">
                                <div className="circle1"></div>
                            </Link>
                            <div className="circle2"></div>
                            <div className="circle3"></div>
                        </div>
                    </div>
                    <div className="screen">
                            <img id="selfie" className="hidden" src={selfie} alt="selfie"></img>
                        <div className="text">
                            <h2>Who Am I?</h2>
                                <p>My name is Vincent Pinas, I'm 17 years old and I live in Noord-Holland.<br></br> Outside of school I like browsing online 
                                to explore all kinds of developments, not only limited to software.</p>
                            
                            <h2>What can I do for you?</h2>
                                <p>Since I am aiming to become a front-end developer or a fullstuck developer I currently mainly write code in Vanilla JS and Node.js<br></br>
                                Although I wouldn't say I have mastered the ways of Javascript yet, I'd like to say I'm atleast pretty decent at it.<br></br> I also know a decent amount of React,
                                one example of what I made in react would be this entire portfolio</p>
                            
                            <h2>My strengths.</h2>
                                <p>Usability, flexibility and user experience are what makes a great app.<br></br>
                                That's why it is important to me that all these things are up to standards when working with my clients.<br></br>
                                A nice working environment for both me and the client are top priority.</p>
                            
                            <h2>Future goals.</h2>
                                <p>My current plans are to mainly improve my front end knowledge<br></br> while trying to also work a little on backend, 
                                which I will focus on once my frontend knowledge is up to standards.</p>
                        </div>
                    </div>
                    <div className="button-wrapper">
                        <a href="uploads/cv.pdf" download><button className="cvbtn">DOWNLOAD CV</button></a>
                    </div>
                </div>
        </div>
    );
}

export default About;
