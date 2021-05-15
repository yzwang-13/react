import useInputPractice from "../hooks/use-practice-hook";
import {useEffect, useState} from "react";

const BasicForm = (props) => {

    const [formIsValid, setFromIsValid] = useState(false)

    // first name custom hook
    const {
        enteredInput: enteredFirstName,
        updateInput: firstNameChangedHandler,
        hasError: firstNameHasError,
        inputBlurHandler: firstNameBlurHandler,
        reset: firstNameReset,
        isValid: firstNameIsValid
    } = useInputPractice(value => value.trim() !== '');

    // last name custom hook
    const {
        enteredInput: enteredLastName,
        updateInput: lastNameChangedHandler,
        hasError: lastNameHasError,
        inputBlurHandler: lastNameBlurHandler,
        reset: lastNameReset,
        isValid: lastNameIsValid
    } = useInputPractice(value => value.trim() !== '');

    // email custom hook
    const {
        enteredInput: enteredEmail,
        updateInput: emailChangedHandler,
        hasError: emailHasError,
        inputBlurHandler: emailBlurHandler,
        reset: emailReset,
        isValid: emailIsValid
    } = useInputPractice(value => (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)));

    // update form validation based on all inputs
    useEffect(() => {
        if (emailIsValid && firstNameIsValid && lastNameIsValid) {
            setFromIsValid(true);
        }else {
            setFromIsValid(false);
        }

    }, [emailIsValid, firstNameIsValid, lastNameIsValid])

    const formSubmitHandler = (event) => {
        event.preventDefault();
        /// do something after submission

        console.log(formIsValid)
        firstNameReset();
        lastNameReset();
        emailReset();
    }

    const firstNameInputClass = firstNameHasError ? 'form-control invalid' : 'form-control';
    const lastNameInputClass = lastNameHasError ? 'form-control invalid' : 'form-control';
    const emailClass = emailHasError ? 'form-control invalid' : 'form-control';


    return (
        <form onSubmit={formSubmitHandler}>
            <div className='control-group'>
                <div className={firstNameInputClass}>
                    <label htmlFor='name'>First Name</label>
                    <input type='text' id='name'
                           value={enteredFirstName}
                           onChange={firstNameChangedHandler}
                           onBlur={firstNameBlurHandler}/>
                    {firstNameHasError && <p className='error-text'>Please enter a valid first name</p>}
                </div>
                <div className={lastNameInputClass}>
                    <label htmlFor='name'>Last Name</label>
                    <input type='text' id='name'
                           value={enteredLastName}
                           onChange={lastNameChangedHandler}
                           onBlur={lastNameBlurHandler}
                    />
                    {lastNameHasError && <p className='error-text'>Please enter a valid last name</p>}
                </div>
            </div>
            <div className={emailClass}>
                <label htmlFor='email'>E-Mail Address</label>
                <input type='text' id='email'
                       value={enteredEmail}
                       onChange={emailChangedHandler}
                       onBlur={emailBlurHandler}
                />
                {emailHasError && <p className='error-text'>Please enter a valid email</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
