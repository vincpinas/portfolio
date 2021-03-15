import React, { useState } from 'react'
import './Projects.css'
import ProjectData from '../../Data/ProjectData'
import ProjectPopUp from '../../Components/ProjectPopUp/PopUp'
import Alert from '../../Components/Alert/Alert'

function Projects() {
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const showPopUp = () => setButtonPopUp(!buttonPopUp);

    let [popUpIndex, setPopUpIndex] = useState();

    const handleClick = (e) => {
        setPopUpIndex(e.target.dataset.index)
        showPopUp()
    }

    return (
        <div className='projects'>
            <div className="c-alert-container">
                <Alert text="If you have any questions" timer={5000} delay={0} />
                <Alert text="Hit me up at the contact page!" timer={5000} delay={60} />
            </div>
            <ProjectPopUp trigger={buttonPopUp} setTrigger={showPopUp} ProjectData={ProjectData[popUpIndex]}/>
            <div className="content-wrapper">
                <div className="container">
                    { ProjectData.map((item, index) => {
                        // map out the project data from the ProjectData.js file and return the number, title, explanation and link for each item in the array.
                        return (
                        <div key={index} className="card">
                            <div className="box">
                                <div className="content">
                                    <h2>{item.number}</h2>
                                    <h3>{item.title}</h3>
                                    <p>{item.introduction}</p>
                                    <span className={`badge badge-${item.status}`}>{item.status_txt}</span>
                                    <button onClick={e => handleClick(e)} data-index={index} className="project-link">Read More {item.icon}</button>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Projects;