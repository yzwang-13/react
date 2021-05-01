import classes from './ErrorModal.module.css';
import Button from "../UI/Button";

const ErrorModal = props => {
    return (
        <div>
            <div onClick={props.onCancel} className={classes.backdrop}/>
            <div className={classes.modal}>
                <div className={classes.header}>
                    <h2>Invalid Input</h2>
                </div>
                <div className={classes.content}>
                    <p>Your input is invalid</p>
                    <Button type='button' onClick={props.onCancel} className={classes.actions} content='Okay'>Okay</Button>
                </div>
            </div>
        </div>

    )
}

export default ErrorModal;
