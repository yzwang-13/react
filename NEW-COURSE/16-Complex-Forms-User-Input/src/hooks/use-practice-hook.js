import {useState} from "react";

const useInputPractice = (validationFunc = ()=>{}) => {

    // handle input value state
    const [enteredInput, setEnteredInput] = useState('')

    // handle isTouched state

    const [isTouched, setIsTouched] = useState(false);

    // // handle input error state
    // const [hasError, setHasError] = useState(true);

    // validate input if it is valid based on the function passed in
    const isValid = validationFunc(enteredInput);
    // console.log(isValid);
    // Case 1: if user clicked, entered, deleted => isTouch == true; isEmpty == true
    const hasError = !isValid && isTouched;

    // Case 2: click in click out blur



    // update input value
    const updateInput = event => {
        setIsTouched(true)
        // console.log(event.target.value)
        setEnteredInput(event.target.value);
    }

    const inputBlurHandler = () => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredInput('');
        setIsTouched(false);
    }


    return {
        enteredInput,
        updateInput,
        hasError,
        inputBlurHandler,
        reset,
        isValid
    }
}
export default useInputPractice;
