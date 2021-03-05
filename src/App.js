import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Wilson', age: 29},
      {name: 'Elevyn', age: 29}
    ]
  }

  render() {
    return (
      <div className="App">
        <button>Switch Name</button>
        <Person name="Max" age="28"/>
        <Person name="Wilson" age="28"/>
        <Person name="Elevyn" age="29"><h1>This is a children</h1></Person>
        <h1>Hi I am a react app</h1>
      </div>
    );
  }
}

export default App;
