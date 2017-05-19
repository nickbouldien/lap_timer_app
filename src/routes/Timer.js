import React, { Component } from 'react';
import {createTimeAction} from '../actions/CreateTimeAction';
import timesStored from '../stores/TimesStored';
import {Link} from 'react-router-dom'


class Timer extends Component {
  constructor(props){
    super(props)
    // this.setAllTimes = this.setAllTimes.bind(this);
    this.state = {
      times: timesStored.getAllTimes()
    }
  }

  componentWillMount() {
    timesStored.on('change', function() {
      this.setState({
        times: timesStored.getAllTimes()
      })
    }.bind(this))
  }

  handleAddTime() {
    console.log(this.props);
    // this.setState()
    //let name = new Date();
    let timeStamp = this.props.timeStamp;
    console.log(timeStamp);
    createTimeAction()
  }


  render() {
    //debugger;
    let list = this.state.times.map(time => {
      return (
        <li key={time.id}>
          id: {time.id}:     time: {time.name}
        </li>
      )
    })

    return (
      <div>
        <div>
          <button onClick={this.handleAddTime.bind(this)}>Add Time</button>
          <ul>
            {list}
          </ul>
        </div>
        <div>
          <Link to={`/`} >Back Home</Link>
        </div>
      </div>
    )
  }
}

export default Timer
