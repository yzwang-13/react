import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>Username: {props.userName}</p>
            <p>Text: {props.text}</p>
        </div>
    )
}

export default userOutput;
