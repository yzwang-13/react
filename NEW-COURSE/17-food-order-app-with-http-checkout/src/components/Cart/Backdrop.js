import classes from "./Cart.module.css";
import React from "react";

const Backdrop = props => {
    return <div onClick={props.cancelCheckOut} className={classes.backdrop}>{props.children}</div>
}

export default Backdrop;
