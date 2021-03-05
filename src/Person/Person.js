import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.clicked}> My name is {props.name} and I am {props.age} old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;
