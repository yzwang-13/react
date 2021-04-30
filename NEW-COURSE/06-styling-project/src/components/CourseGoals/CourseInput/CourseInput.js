import React, {useState} from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setValid] = useState(true);


    const goalInputChangeHandler = event => {
        setEnteredValue(event.target.value);
        if (event.target.value.trim().length > 0){
            setValid(true);
        }
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        // if a user entered nothing, simply return
        if (enteredValue.trim().length === 0) {
            setValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={isValid ? 'form-control' : 'form-control invalid'}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler}/>
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
