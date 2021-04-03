import React, {Component} from 'react';
import Classes from './App.css';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

    constructor(props) {
        super(props);
        console.log('[app.js] constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[app.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[app.js] componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[app.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[app.js] componentDidUpdate')
    }

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
        console.log('[app.js] render')
        // check if the showPersons == true
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons changed={this.nameChangedHandler} clicked={this.deletePersonHandler} persons={this.state.persons}/>
                </div>
            )
        }


        return (
            <ErrorBoundary>
                <div className={Classes.App}>
                    <Cockpit
                        title={this.props.appTitle}
                        showPerson={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.togglePersonHandler}
                    />
                    {persons}
                </div>
            </ErrorBoundary>
        );
    }
}

export default App;
