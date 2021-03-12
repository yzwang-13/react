import React, {Component, useState} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {


    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Wilson', age: 29},
            {name: 'Elevyn', age: 29}
        ],
        otherState: "Some other value",
        showPersons: false
    }

    switchNameHandler = () => {
        // console.log("was clicked");
        // merge the old state with the new one, will not override old state.
        this.setState({
            persons: [
                {name: "aaa", age: 0},
                {name: 'BBB', age: 0},
                {name: 'CCC', age: 0}
            ]
        });
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        })
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
                    {this.state.persons.map((person)=>{
                        return <Person clicked={this.switchNameHandler} name={person.name}
                                       age={person.age}
                                       changed={this.nameChangedHandler}/>
                    })}
                </div>
            )
        }

        return (
            <div className="App">
                <h1 className="App">Hi I am a react app</h1>
                <button style={style} onClick={this.switchNameHandler}>Switch Name</button>
                {persons}
            </div>
        );
    }
}

export default App;


// const App = props => {
//    const [personsState, setPersonsState] =  useState({
//         persons: [
//             {name: 'Max', age: 28},
//             {name: 'Wilson', age: 29},
//             {name: 'Elevyn', age: 29}
//         ],
//
//     });
//
//    const [otherState, setOtherState] = useState({otherState1:'Some other value for other state 1'});
//
//    const [otherState2, setOtherState2] = useState({otherState1:'Some other value for other state 2'});
//    console.log(personsState, otherState, otherState2);
//
//     const switchNameHandler = () => {
//         // console.log("was clicked");
//         // merge the old state with the new one, will not override old state.
//         setPersonsState({
//             persons: [
//                 {name: 'AAA', age: 0},
//                 {name: 'BBB', age: 0},
//                 {name: 'CCC', age: 0}
//             ]
//         });
//     }
//
//     return (
//         <div className="App">
//             <button onClick={switchNameHandler}>Switch Name</button>
//             <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//             <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
//             <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>
//             <h1>Hi I am a react app</h1>
//         </div>
//     );
//
// }
// export default App;
