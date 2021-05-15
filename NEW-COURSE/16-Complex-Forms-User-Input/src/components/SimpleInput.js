import {useEffect, useRef, useState} from 'react';

// Validation includs:
// (1): A user cannot submit the form when input is empty
// (2):


const SimpleInput = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    // const inputRef = useRef();

    // Whenever a new value is entered we ensure that this enteredNameIsValid
    // will always take into account the latest inputValue and enteredNameTouched state.
    //
    // Because whenever one of these two states changes, this component function gets re-rendered.
    const enteredNameIsValid = inputValue.trim() !== '';
    const nameInputInvalid = !enteredNameIsValid && enteredNameTouched
    const nameInputClasses = nameInputInvalid ? 'form-control invalid' : 'form-control';

    useEffect(()=> {
        if (enteredNameIsValid){
            setFormIsValid(true);
        }else {
            setFormIsValid(false);
        }
    },[enteredNameIsValid])

    const formSubmitHandler = event => {
        event.preventDefault();

        setEnteredNameTouched(true);

        // // use trim() to remove and white spaces at the beginning and end
        // if (inputValue.trim() === '') {
        //     setEnteredNameIsValid(false);
        //     return;
        // }

        if (!formIsValid) {
            return;
        }


        // setEnteredNameIsValid(true);
        console.log(inputValue);
        setInputValue('');
        setEnteredNameTouched(false);
    }

    const inputChangeHandler = (event) => {
        // console.log(event.target.value);
        setInputValue(event.target.value);
        // if (event.target.value.trim() !== ''){
        //     setEnteredNameIsValid(true);
        // }

    }

    const inputBlurHandler = event => {
        // click in, click out, leave input empty
        setEnteredNameTouched(true);
    }


    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    value={inputValue}
                    onChange={inputChangeHandler}
                    // ref={inputRef}
                    onBlur={inputBlurHandler}/>
                {nameInputInvalid && <p className='error-text'>Name must not be empty</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
