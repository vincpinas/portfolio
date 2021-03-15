import React, { useState, useRef, useEffect } from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Player.css'
import Songdata from '../../Data/SongData'

function Player() {

    const [songs] = useState(Songdata);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
    const [volume, setVolume] = useState(1)

    const [repeat, setRepeat] = useState(false);
    const activateRepeat = () => setRepeat(!repeat);

    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > songs.length - 1) {
            return 0;
            } else {
            return currentSongIndex + 1;
            }
        });
    }, [currentSongIndex, songs.length, nextSongIndex]);

    const audioEl = useRef(songs[currentSongIndex]);
    const [isPlaying, setIsPlaying] = useState(false);

    // UseEffect to check whether the isPlaying boolean is true or false and play if True, pause if false.
    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
            audioEl.current.volume = volume;
        } else {
            audioEl.current.pause();
        }
    });

    // Skip Function to check for the active song (starts initially at index 0 of the songdata array) and skip between all the songs.
    // Brings you back to the start if you skip forwards if you reach the end of the list and brings you at the end if you skip backwards after reaching the beginning of the list.
    const SkipSong = (forwards = true) => {
        if (forwards) {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp++;

                if (temp > songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = songs.length - 1;
                }

                return temp;
            });
        }
    }

    // Skip & repeat Functionality
    useEffect(() => {
        audioEl.current.addEventListener("timeupdate", () => {
            // If repeat is true, loop the audio, else skip it automatically
            audioEl.current.loop = repeat
            // If the current time of the audio element matches the duration, automatically skip to the next song.
            if (audioEl.current.currentTime === audioEl.current.duration) {
                SkipSong()
            }
        })
    });

    // Set the state of the music menu to show it or hide it. (set to false initially)
    const [musicMenu, setMusicmenu] = useState(false);
    const showMusicmenu = () => setMusicmenu(!musicMenu);

    return (
        <div className={musicMenu ? 'c-player-container active' : 'c-player-container'}>
            <Link to="#" className="playerButton" onClick={ showMusicmenu }>
                <FaIcons.FaMusic />
            </Link>
            <div className="c-player">
                <audio preload="auto"src={songs[currentSongIndex].src} ref={audioEl}></audio>
                <PlayerDetails song={songs[currentSongIndex]} audioEl={audioEl} isPlaying={isPlaying} SkipSong={SkipSong}  showMusicmenu={showMusicmenu}/>
                <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} activateRepeat={activateRepeat} repeat={repeat} setVolume={setVolume}/>
            </div>
        </div>
    )
}

export default Player