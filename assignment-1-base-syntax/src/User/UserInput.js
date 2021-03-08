import React from 'react';

const styles = {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    boxSizing: "border-box",
}

const userInput  = props => <input style={styles} type="text" onChange={props.userInputChanged} value={props.value}/>;

export default userInput;
