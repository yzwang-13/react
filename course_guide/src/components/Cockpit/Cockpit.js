import React from 'react';
import Classes from './Cockpit.css';

const cockpit = (props) => {

    let btnClasses = '';
    if (props.showPerson === true){
        btnClasses = Classes.Black;
    }
    // let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if (props.persons.length <= 2) {
        classes.push(Classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        classes.push(Classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={Classes.Cockpit}>
            <h1 className="App">{props.title}</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button className={btnClasses} onClick={props.clicked}>Show Persons</button>
        </div>
    )
}

export default cockpit;
