import React, {Component, useState} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {


    state = {
        persons: [
            {name: 'Max', id: 123456, age: 28},
            {name: 'Wilson', id: 123, age: 29},
            {name: 'Elevyn', id: 456, age: 29}
        ],
        otherState: "Some other value",
        showPersons: false
    }


    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: event.target.value, age: 0},
                {name: 'BBB', age: 0},
                {name: 'CCC', age: 0}
            ]
        })
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        })
    }

    deletePersonHandler = (personIndex) => {
        // create a copy of persons array instead of directly manipulating the original array
        // const persons = [...this.state.persons];
        const persons = this.state.persons.slice();
        // remove one element from the array
        persons.splice(personIndex, 1);
        this.setState({
            persons: persons
        })
    }

    render() {
        const style = {
            backgroundColor: "green",
            color: "white",
            font: "inherit",
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        // check if the showPersons == true
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                key={person.Id}
                                name={person.name}
                                age={person.age}
                                changed={this.nameChangedHandler}
                                clicked={() => this.deletePersonHandler(index)}
                            />
                        )
                    })}
                </div>
            )
        }

        return (
            <div className="App">
                <h1 className="App">Hi I am a react app</h1>
                <button style={style} onClick={this.togglePersonHandler}>Show Persons</button>
                {persons}
            </div>
        );
    }
}

export default App;
