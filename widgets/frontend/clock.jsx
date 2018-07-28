import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };

    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return(
      // hours}:{minutes}:{seconds
      <div className="clock">
        <div className="clock-format">
          Date: <br />Time:
        </div>
        <div className="clock-data">{this.state.time.toDateString()}<br />
            {this.state.time.toLocaleTimeString('en-US', {timeZone:'America/Los_Angeles', timeZoneName: 'short'})}
        </div>
      </div>

    );
  }
}

export default Clock;
