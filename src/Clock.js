import React, {Component} from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), utc_dif: 7};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="Clock">
        <h1>Clock </h1>
        <h2>{this.state.date.toLocaleTimeString()} {this.state.utc_dif}</h2>
      </div>
    );
  }
}

export default Clock;