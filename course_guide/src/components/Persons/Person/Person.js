import React from 'react';
// import './Person.css';
// import Radium from "radium";
// import styled from 'styled-components';
import Classes from './Person.css';

// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 2px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;
//
// @media (max-width: 1000px) {
//         width: 200px;
// }`

const person = (props) => {

    const rnd = Math.random();
    if (rnd > 0.7){
        throw new Error('Something went wrong');
    }

    return (
        <div className={Classes.Person}>
            <p onClick={props.clicked}> My name is {props.name} and I am {props.age} old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;
