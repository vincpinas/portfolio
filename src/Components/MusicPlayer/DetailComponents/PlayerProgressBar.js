import React from 'react'

class PlayerProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seekFillWidth: this.props.seekFillWidth }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 100);
      }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            seekFillWidth: this.props.seekFillWidth
        });
      }

    render() {
        return (
            <div className="seek">
                <div className="fill" style={{ width : this.state.seekFillWidth }}></div>
            </div>
        );
    }
}

export default PlayerProgressBar