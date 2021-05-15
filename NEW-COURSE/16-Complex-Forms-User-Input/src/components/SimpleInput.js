import {useRef, useState} from 'react';

// Validation includs:
// (1): A user cannot submit the form when input is empty
// (2):


const SimpleInput = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const inputRef = useRef();

    const formSubmitHandler = event => {
        event.preventDefault();

        setEnteredNameTouched(true);

        // use trim() to remove and white spaces at the beginning and end
        if (inputValue.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        }

        setEnteredNameIsValid(true);
        console.log(inputRef.current.value);
    }

    const inputChangeHandler = (event) => {
        // console.log(event.target.value);
        setInputValue(event.target.value);
        if (event.target.value.trim() !== ''){
            setEnteredNameIsValid(true);
        }

    }

    const inputBlurHandler = event => {
        // click in, click out, leave input empty
        setEnteredNameTouched(true);
        if (inputValue.trim() === ''){
            setEnteredNameIsValid(false);
        }
    }

    const nameInputClasses = !enteredNameIsValid && enteredNameTouched ? 'form-control invalid' : 'form-control'

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    value={inputValue}
                    onChange={inputChangeHandler}
                    ref={inputRef}
                    onBlur={inputBlurHandler}/>
                {!enteredNameIsValid && enteredNameTouched && <p className='error-text'>Name must not be empty</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
