import React from 'react';

const person = (props) => {
    return (
        <div>
            <h1> My name is {props.name} and I am {props.age} old</h1>
            <p>{props.children}</p>
        </div>
    )
};

export default person;
