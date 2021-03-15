import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import Alert from '../../Components/Alert/Alert'
import RubberSpan from '../../Components/RubberSpan/RubberSpan'

function Home() {
    return (
        <div className='home'>
            <div className="c-alert-container">
                <Alert text="Welcome to the homepage." timer={4000} delay={0} />
                <Alert text="Please enjoy your stay!" timer={4000} delay={60} />
            </div>
            <div className="introduction">
                <div className="HERO">
                    <RubberSpan letters="Hi,"/>
                    <br></br>
                    <RubberSpan letters="I'm" margin={10}/>
                    <RubberSpan letters="V" hero={true}/>
                    <RubberSpan letters="incent,"/>
                    <br></br>
                    <RubberSpan letters="Web" margin={10}/>
                    <RubberSpan letters="Developer."/>
                </div>
                <p>Front End Developer / Software Student</p>
                <Link to="/projects">
                    <button>Projects</button>
                </Link>
            </div>
            <div className="bigLetters">
                <h1 id="bigLetter">V</h1>
                <h1 id="bigLetter2">P</h1>
            </div>
        </div>
    )
}

export default Home;