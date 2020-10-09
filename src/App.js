import React, { Component } from 'react'
import './App.css';
import InputForm from './components/InputForm';
import InputLength_message from './components/InputLength_message'
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
      <div>
        <div className='inputBlock'>
          <InputForm
            changed={this.inputHandler}
            default={this.state.inputDefault}
            length={this.state.length}
          />

          <InputLength_message
            length={this.state.length}
          />
        </div>
        <ValidationComponent
          length={this.state.length}
        />
      </div >
    )
  }
}

export default App;

