import React, { Component } from 'react';

class Timer extends Component {
  constructor(props){
    super(props)
    // this.state = {
    //   times: Times
    // }
  }

  stopTimer() {
    console.log('stop timer called');
    // this.setState()
  }


  render() {



    return (
      <div>

        <button onClick={this.stopTimer.bind(this)}>Stop Timer</button>

        <ul>


        </ul>
      </div>
    )
  }
}

export default Timer;
