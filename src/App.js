import React, { Component } from 'react'
import './App.css';
import UserInput from './components/Input';
import ValidationComponent from './components/ValidationComponent';

class App extends Component {

  state = {
    inputDefault: "Type something",
    length: 9,
  }

  inputHandler = (event) => {
    let getLength = event.target.value.length;
    this.setState({
      length: getLength,
    })
  }

  render() {
    return (
      <div className='App'>
        <UserInput
          changed={this.inputHandler}
          default={this.state.inputDefault}
          length={this.state.length}
        />

        <ValidationComponent
          length={this.state.length}
        />
      </div>
    )
  }
}

export default App;

