import React, {useState, useEffect, useReducer, useContext, useRef} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from "../../context/auth-context";
import UserInput from "../UI/UserInput/UserInput";

const Login = () => {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState();

    const ctxData = useContext(AuthContext);

    const emailRef = useRef();
    const passwordRef = useRef();


    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer((lastState, action) => {

        if (action.type === 'USER_INPUT') {
            return {value: action.value, isValid: action.value.includes('@')};
        }

        if (action.type === 'INPUT_BLUR') {
            return {value: lastState.value, isValid: lastState.value.includes('@')}
        }

        return {value: '', isValid: false}
    }, {value: '', isValid: false});

    const [passwordState, dispatchPassword] = useReducer((latestState, action)=>{
        if (action.type === 'USER_INPUT') {
            return {value: action.value, isValid: action.value.trim().length > 6}
        }
        if (action.type === 'VALIDATE') {
            return {value: latestState.value, isValid: latestState.value.trim().length > 6 }
        }
        return {value: '', isValid: false}

    },{value: '', isValid: false})

    // useEffect(()=> {
    //     console.log('Effect Running')
    //
    //     return ()=> {
    //         console.log('Effect Cleanup')
    //     }
    // }, [])
    //

    const {isValid: emailIsValid} = emailState;
    const {isValid: passwordIsValid} = passwordState;


    useEffect(() => {

        // store a timer in a constant
        // perform update state only if user pause typing for more than 500 milsec
        const handler = setTimeout(() => {
            console.log('useEffect Checking form validity');
            setFormIsValid(
                emailState.isValid && passwordState.isValid
            );
        }, 500);

        // return a cleanup function
        return () => {
            clearTimeout(handler);
        }
    }, [emailState.isValid, passwordState.isValid]);






    const emailChangeHandler = (event) => {
        dispatchEmail({type: 'USER_INPUT', value: event.target.value});
        setFormIsValid(
            emailState.isValid && passwordState.value.trim().length > 6
        );
    };

    const passwordChangeHandler = (event) => {
        // setEnteredPassword(event.target.value);
        dispatchPassword({type: 'USER_INPUT', value: event.target.value});

        setFormIsValid(
            event.target.value.trim().length > 6 && emailState.isValid
        );
    };

    const validateEmailHandler = () => {
        dispatchEmail({type: 'INPUT_BLUR'});
    };

    const validatePasswordHandler = () => {
        dispatchPassword({type: 'VALIDATE'});
        // setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid ){
            ctxData.onLogin(emailState.value, passwordState.value);
        } else if (!emailIsValid) {
            // if email is invalid
            emailRef.current.functionToCall();
        } else {
            // password is invalid
            passwordRef.current.functionToCall();

        }
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                    <UserInput
                        ref={emailRef}
                        isValid={emailState.isValid}
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                    <UserInput
                        ref={passwordRef}
                        isValid={ passwordState.isValid}
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
