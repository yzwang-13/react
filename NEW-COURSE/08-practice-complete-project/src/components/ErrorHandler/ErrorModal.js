import React from 'react';
import classes from './ErrorModal.module.css';
import Button from "../UI/Button";
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div onClick={props.divClicked} className={classes.backdrop}/>

}

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.header}>
                <h2>Invalid Input</h2>
            </div>
            <div className={classes.content}>
                <p>Your input is invalid</p>
                <Button type='button' onClick={props.buttonClicked} className={classes.actions}>Okay</Button>
            </div>
        </div>
    )
}

const ErrorModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop divClicked={props.onCancel}/>,
                document.getElementById('backdrop-root')
            )};
            {ReactDOM.createPortal(
                <ModalOverlay buttonClicked={props.onCancel} />,
                document.getElementById('overlay-root')
            )};
        </React.Fragment>

    )
}
export default ErrorModal;
