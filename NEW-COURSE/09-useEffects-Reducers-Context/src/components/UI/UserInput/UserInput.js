import React, {useRef, useImperativeHandle} from 'react';
import classes from "../../Login/Login.module.css";

const UserInput = React.forwardRef((props, ref) => {

    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    }

    useImperativeHandle(ref, () => {
        return {
            functionToCall: activate
        }
    })

    return (
        <div
            className={`${classes.control} ${
                props.isValid === false ? classes.invalid : ''
            }`}
        >
            <label htmlFor={props.type}>{props.type}</label>
            <input
                ref={inputRef}
                type={props.type || 'text'}
                id={props.id || 'UserInput'}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    )
})

export default UserInput;
