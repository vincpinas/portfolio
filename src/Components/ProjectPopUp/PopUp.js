import React from 'react'
import './ProjectPopUp.css'
import * as FaIcons from 'react-icons/fa'

function ProjectPopUp(props) {
    return  (props.trigger) ? (
        <div className="c--popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={props.setTrigger}><FaIcons.FaTimes/></button>
                <div className="popup-headers">
                    <h2>{props.ProjectData.title}</h2>
                    <h4>{props.ProjectData.team}</h4>
                </div>
                <div className="popup-main">
                    <img className="popup-img" src={props.ProjectData.img_src} alt="Current Project" />
                    <div className="popup-text">
                        <h3>Explanation</h3>
                        <p>{props.ProjectData.explanation}</p>
                        <h3 className="popup-margetop">What I learned</h3>
                        <p>{props.ProjectData.learned}</p>
                    </div>
                </div>
                <a className="popup-link" href={props.ProjectData.links.github} target={props.ProjectData.target} rel="noreferrer">Check The Code!</a>
                {props.ProjectData.live_status ? <a className="popup-link" href={props.ProjectData.links.live} target={props.ProjectData.target} rel="noreferrer">Test It Live!</a> : null }
                <h3 className="technologies-header">Skills used</h3>
                <div className="popup-technologies">
                    {Object.values(props.ProjectData.technologies).map((technology, index) => {
                        return (
                            <p key={`${technology}${index}`} className="popup-technology">{technology}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    ) : "";
}

export default ProjectPopUp