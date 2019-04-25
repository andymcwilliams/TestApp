import React, { Component } from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import './App.css';
import Avatar from './Avatar'
import Clock from './Clock'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "initial value"
    }
  }
  render() {
    return (
      <div>
        <header className="App-header">
          <DefaultButton
            text='See Button'
            primary={true}
            onClick={() => alert('hello')} />

          <TextField
            value={this.state.value}
            styles={{ fieldGroup: { width: 100 } }}
          />
          Home page
              <Avatar />
          <Clock />
        </header>
      </div>
    )
  }
}

export default Home;