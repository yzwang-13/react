import React, {Component} from 'react';
import Person from "./Person/Person";

class Persons extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[persons.js shouldComponentUpdate]')
        if(nextProps.persons !== this.props.persons){
            return true;
        }
        return false;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[persons.js getSnapshotBeforeUpdate]')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[persons.js componentDidUpdate]')
    }

    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    changed={(event) => this.props.changed(event, person.id)}
                    clicked={() => this.props.clicked(index)}
                />
            )
        })
    }
}

export default Persons;
