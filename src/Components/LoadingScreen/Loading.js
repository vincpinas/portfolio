import React, { useState, useEffect } from 'react'
import './Loading.css'
import loadingTextData from '../../Data/LoadingTextData'

// Choose a random quote object in the quoteData list.
function choose(data) {
    let index = Math.floor(Math.random() * data.length);
    return data[index]
}

// Set all the available quote data ready for use.
const quoteObject = choose(loadingTextData)
let quoteeAvailable = true
if (quoteObject.quotee === "") {
    quoteeAvailable = false
}

const LoadingScreen = (props) => {
    const [loadStateText, setLoadStateText] = useState(["loading dynos", "eating chips", "cleaning up"]);

    useEffect(() => {
        let temp = [...loadStateText]
        const interval = setInterval(() => {
            temp.splice(0, 1)
            setLoadStateText([...temp])
        }, 1000)

        return () => clearInterval(interval)
    }, [props.loading, loadStateText])

    return (
        <div className="loadingContainer">
            <div className="lettersLogo">
                <h1 id="letterLogo1">V</h1>
                <h1 id="letterLogo2">P</h1>
            </div>
            <div className="loadingText">
                <p className="quote">{quoteObject.quote}</p>
                <p className="quotee">{quoteeAvailable ? `- ${quoteObject.quotee}` : ""}</p>
            </div>
            <div className="progress-bar">
                <div className="progressMove"></div>
            </div>
            <p className="loadingText">{props.loading ? loadStateText[0] : null}...</p>
        </div>
    )
}

export default LoadingScreen;