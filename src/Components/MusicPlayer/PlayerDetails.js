import React, { useEffect, useState } from 'react'
import PlayerProgressBar from './DetailComponents/PlayerProgressBar'
import PlayerTimer from './DetailComponents/PlayerTimer'

function PlayerDetails(props) {
    // Turn The currentTime of the audio prop object into a string and pass it to the Player Details.
    function formatTime(t) {
        let currentSeconds = t
        let hours = Math.floor(currentSeconds / 3600 );
        let mins = Math.floor(currentSeconds / 60 ) - (hours * 60);
        let secs = Math.floor (currentSeconds % 60);
        let output = mins.toString().padStart(1, '0') + ':' + secs.toString().padStart(2, '0');

        return output
    }

    // Set the current Position on the progress bar and pass it to the ProgressBar component.
    let [seekFillWidth, setSeekFillWidth] = useState(0)
    // Use effect to listen to timeupdates after the first render and actively update the progressBar position.
    useEffect(() => {
        props.audioEl.current.addEventListener("timeupdate", () => {
                let position = Math.floor(props.audioEl.current.currentTime) / Math.floor(props.audioEl.current.duration)
                // Calculate the current position of the progress bar.
                if(isNaN(position)) {
                    setSeekFillWidth(0)
                } else {
                    setSeekFillWidth(position * 100 + "%")
                }
        })
    })

    return (
        <div className="c-player--details">
            <div className="details-img">
                <img src={props.song.img_src} alt="Song Cover" onClick={ props.showMusicmenu }></img>
            </div>
            <div className="audio-details">
                <div className="details-headers">
                    <h3 className="details-title">{props.song.title}</h3>
                    <h4 className="details-artist">{props.song.artist}</h4>
                    <div className="audio-timing-data">
                        <PlayerTimer output={ formatTime(Math.floor(props.audioEl.current.currentTime)) }/>
                        <PlayerProgressBar seekFillWidth={ seekFillWidth }/>
                        <p className="audio-timer">{ props.song.duration }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerDetails
