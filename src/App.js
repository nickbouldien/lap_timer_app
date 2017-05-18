import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> working </h1>

        <Timer />

      </div>
    );
  }
}

export default App;
