import React, { Component } from 'react'
import './App.css';
import UserInput from './components/InputBlock';
import ValidationComponent from './components/ValidationComponent';

class App extends Component {

  state = {
    inputDefault: "Type something",
    length: null,
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

