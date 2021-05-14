import React from "react";
import classes from './Spinner.module.css';

const Spinner = props => {
    return <div className={classes.loader}>{props.children}</div>
}
export default Spinner
