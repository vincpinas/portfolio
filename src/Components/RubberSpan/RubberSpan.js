import React from 'react'
import './RubberSpan.css'

function RubberSpan(props) {
    let letterArray = [];

    let split = props.letters.split("");
    split.forEach(item => {
        letterArray.push(item)
    });

    // Set the animation on hovering over the target
    function changeAnimation(e) {
        e.target.style.animationName = 'rubberBand'
        e.target.style.animationDuration = '1s'
    }

    // Remove the animation after a set time to reset it so it can be played again later.
    function resetAnimation(e) {
        setTimeout(() => {
            e.target.style.animation = 'none';
            e.target.style.animation = '';
        }, 900);
    }

    const rubberContainerStyles = {
        marginRight: props.margin + "px"
    }

    const heroLetter = {
        textShadow: "-1px 0 0px #4d43ff, 0 1px 0px #4238ff, -2px 1px 0px #4d43ff, -1px 2px 0px #4238ff, -3px 2px 0px #4d43ff, -2px 3px 0px #4238ff, -4px 3px 0px #4d43ff"
    }

    return (
        <span style={rubberContainerStyles}>
            { letterArray.map((item, index) => {
                return (
                    <span key={index} className="blast-text" style={props.hero ? heroLetter : null} onMouseOver={changeAnimation} onMouseLeave={resetAnimation}>{item}</span>
                )
            })}
            <span className="blast-text" onMouseOver={changeAnimation} onMouseLeave={resetAnimation}>{props.emoji}</span>
        </span>
    )
}

export default RubberSpan