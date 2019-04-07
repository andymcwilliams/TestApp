import React, { Component } from '../../node_modules/react';
import './App.css';
import NavBar from './HeaderComponent/NavBar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Route name="home" exact path="/" component={HomePage} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
