import React, {Component} from 'react';
import './Validation.css';

const validation = (props) => {
    let output = null;

    if ((props.length) < 5 && (props.length > 0)) {
        output = <p className="Red">Text too short</p>
    } else if (props.length > 10) {
        output = <p className="Red">Text too long</p>
    }
    console.log(output)

    return (
        <div><p>{output}</p></div>
    )

}

export default validation;
