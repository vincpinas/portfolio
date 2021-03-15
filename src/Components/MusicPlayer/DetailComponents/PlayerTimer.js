import React from 'react'

class PlayerTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { output: this.props.output }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 100);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            output: this.props.output
        });
    }

    render() {
        return (
            <p className="audio-timer">{ this.state.output }</p>
        );
    }
}

export default PlayerTimer