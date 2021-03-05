import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Wilson', age: 29},
      {name: 'Elevyn', age: 29}
    ],
    otherState: "Some other value"
  }

  switchNameHandler = () => {
    // console.log("was clicked");
    // merge the old state with the new one, will not override old state.
    this.setState({
      persons: [
        {name: 'AAA', age: 0},
        {name: 'BBB', age: 0},
        {name: 'CCC', age: 0}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
        <h1>Hi I am a react app</h1>
      </div>
    );
  }
}

export default App;
