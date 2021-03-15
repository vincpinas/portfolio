import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

function PlayerControls(props) {
    return (
        <div className="c-player--controls">
            <div className="fillerdiv-controls"></div>
            <button className="skip-btn" onClick={() => props.SkipSong(false)}>
                <AiIcons.AiFillStepBackward className="playerIcons"/>
            </button>
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={ props.isPlaying ? faPause : faPlay } className="playerIcons"/>
            </button>
            <button className="skip-btn" onClick={() => props.SkipSong()}>
                <AiIcons.AiFillStepForward className="playerIcons"/>
            </button>
            <button className={props.repeat ? "playfn-btn active" : "playfn-btn"}>
                <IoIcons.IoIosRepeat onClick={props.activateRepeat} className="playerIcons"/>
            </button>
            <input className="volume-slider" type="range" min={0} max={1} step={0.01} onChange={event => {props.setVolume(event.target.valueAsNumber)}}/>
        </div>
    )
}

export default PlayerControls
