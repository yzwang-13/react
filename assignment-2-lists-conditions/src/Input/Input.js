import React from 'react';

const input = (props) => {
    return (
        <div>
            <input onChange={props.changed} value={props.text} />
            <p>Length of the input above: {props.inputLength}</p>
        </div>
    )
}

export default input;
