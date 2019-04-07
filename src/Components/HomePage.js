import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import { DefaultButton } from '../../node_modules/office-ui-fabric-react/lib/Button';
import { TextField } from '../../node_modules/office-ui-fabric-react/lib/TextField';

class HomePage extends Component {
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

        </header>
        Home page
      </div>
    )
  }
}

export default HomePage;