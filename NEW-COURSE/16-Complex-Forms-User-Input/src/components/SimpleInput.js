import {useEffect, useRef, useState} from 'react';
import useInput from "../hooks/use-input";

// Validation includs:
// (1): A user cannot submit the form when input is empty
// (2):


const SimpleInput = (props) => {

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName,
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(value => (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)));

    // const [inputValue, setInputValue] = useState('');
    // const [emailInputValue, setEmailInputValue] = useState('');
    // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const [formIsValid, setFormIsValid] = useState(false);


    // const enteredNameIsValid = inputValue.trim() !== '';
    // const nameInputInvalid = !enteredNameIsValid && enteredNameTouched
    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';

    // const enteredEmailIsValid = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInputValue));
    // console.log(enteredEmailIsValid);
    // const emailInputInvalid = !enteredEmailIsValid && enteredEmailTouched;
    const emailInputClass = emailInputHasError ? 'form-control invalid' : 'form-control';

    useEffect(() => {
        if (enteredNameIsValid && enteredEmailIsValid) {
            setFormIsValid(true);
        } else {
            setFormIsValid(false);
        }
    }, [enteredNameIsValid, enteredEmailIsValid])

    const formSubmitHandler = event => {
        event.preventDefault();


        // // use trim() to remove and white spaces at the beginning and end
        // if (inputValue.trim() === '') {
        //     setEnteredNameIsValid(false);
        //     return;
        // }

        if (!formIsValid) {
            return;
        }


        // setEnteredNameIsValid(true);
        // console.log(inputValue);
        // setInputValue('');
        // setEmailInputValue('');
        // setEnteredNameTouched(false);
        // setEnteredEmailTouched(false);
        resetName();
        resetEmail();
    }
    //
    // const nameChangeHandler = (event) => {
    //     setInputValue(event.target.value);
    // }

    // const emailInputChangeHandler = (event) => {
    //     setEnteredEmailTouched(true);
    //     setEmailInputValue(event.target.value);
    //     console.log(event.target.value)
    // }

    // const inputBlurHandler = event => {
    //     // click in, click out, leave input empty
    //     console.log(event.target['id'])
    //     // if (event.target['id'] === 'name') {
    //     //     // setEnteredNameTouched(true);
    //     // } else
    //         if (event.target['id'] === 'email') {
    //         setEnteredEmailTouched(true);
    //     }
    // }


    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    value={enteredName}
                    onChange={nameChangeHandler}
                    // ref={inputRef}
                    onBlur={nameBlurHandler}/>
                {nameInputHasError && <p className='error-text'>Name must not be empty</p>}
            </div>
            <div className={emailInputClass}>
                <label htmlFor='email'>Your Email</label>
                <input
                    type='email'
                    id='email'
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
                {emailInputHasError && <p className='error-text'>Email is invalid</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
