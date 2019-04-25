import React, { Component } from '../../node_modules/react';
import './App.css';
import NavBar from './HeaderComponent/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About'
import Error from './Error'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about/" component={About} />
              <Route path="/users/" component={NavBar} />
              <Route component={Error} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
