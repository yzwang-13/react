import React from 'react';
// import './Person.css';
// import Radium from "radium";
// import styled from 'styled-components';
import Classes from './Person.css';


const person = (props) => {
    console.log('[Person.js] rendering...')

    return (
        <div className={Classes.Person}>
            <p onClick={props.clicked}> My name is {props.name} and I am {props.age} old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;
