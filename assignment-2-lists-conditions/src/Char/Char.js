import React from 'react';
import './Char.css'
import {uuid} from 'uuidv4';

const char = (props) => {
    return (
        <div onClick={props.clicked} className="Char">
            <p>{props.character}</p>
        </div>
    )
}

export default char;
