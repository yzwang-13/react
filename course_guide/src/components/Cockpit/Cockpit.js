import React, {useEffect}from 'react';
import Classes from './Cockpit.css';

const cockpit = (props) => {

    useEffect(()=> {
        console.log('[Cockpit.js] useEffect')
    },[trackingVariable1,trackingVariable2, trackingVariable3]);

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
