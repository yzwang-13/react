import React, {Component, useState} from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from "radium";

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


    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(person => {
            // return true if person.id === id
            return person.id === id;
        })

        // deep copy of the object
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;
        console.log(person)

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
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
            cursor: 'pointer',
            ":hover": {
                backgroundColor: "black",
                color: "white"
            }
        };

        // check if the showPersons == true
        let persons = null;
        if (this.state.showPersons) {
            style.backgroundColor = "red";
            style[':hover'] = {
                backgroundColor: "salmon",
                color: "black"
            }
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                key={person.id}
                                name={person.name}
                                age={person.age}
                                changed={(event) => this.nameChangedHandler(event, person.id)}
                                clicked={() => this.deletePersonHandler(index)}
                            />
                        )
                    })}
                </div>
            )
        }

        // let classes = ['red', 'bold'].join(' ');
        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red'); // classes = ['red']
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold'); // classes = ['red', 'bold']
        }

        return (
            <StyleRoot>
                <div className="App">
                    <h1 className="App">Hi I am a react app</h1>
                    <p className={classes.join(' ')}>This is really working</p>
                    <button style={style} onClick={this.togglePersonHandler}>Show Persons</button>
                    {persons}
                </div>
            </StyleRoot>
        );
    }
}

export default Radium(App);
