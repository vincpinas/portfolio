import React, { useState, useEffect } from 'react'
import './Alert.css'
 
function Alert(props) {
    const [alertActive, setAlertActive] = useState(false);

    useEffect(() => {
        // Alert Timing Functionality.
        const delay = setTimeout(() => setAlertActive(true), 1000 + props.delay);
        const timer = setTimeout(() => setAlertActive(false), props.timer + props.delay);

        // Clean up function.
        return () => {
            clearTimeout(delay);
            clearTimeout(timer);
        };
      }, [props.delay, props.timer]);

    const errorStyle = {
        backgroundColor: "#ff00007e"
    }

    return (
        <div className={alertActive ? 'c-alert active' : 'c-alert'} style={props.error ? errorStyle : null}>
            <p>{props.text}</p>
        </div>
    )
}

export default Alert
