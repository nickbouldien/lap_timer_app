import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Timer from './routes/Timer';
import Home from './routes/Home';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h3> Time keeper web app </h3>

          <Route exact path="/" component={Home} />
           <Route exact path="/timer" component={Timer} />

        </div>
      </Router>

    );
  }
}

export default App;
