import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';


class App extends Component {

  state = {
    userName: "Wilson",
    text: "Today is a good day."
  }

  userInputHandler = (event) => {
    console.log(event.target.value);
    console.log("input changed");
    this.setState({
      userName: event.target.value
    });
  }



  render() {
    return (
      <div className="App User-output">
        <UserOutput userName={this.state.userName} text={this.state.text} />
        <UserInput userInputChanged={this.userInputHandler.bind(this)} value={this.state.userName} />
      </div>
    );
  }
}

export default App;
