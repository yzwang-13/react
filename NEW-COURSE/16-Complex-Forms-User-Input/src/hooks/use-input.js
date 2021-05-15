import {useState} from "react";

const useInput = (validateValueFunc = ()=>{}) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValueFunc(enteredValue);
    const hasError = !valueIsValid && isTouched

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const inputBlurHandler = event => {
        // click in, click out, leave input empty
        setIsTouched(true)
    }

    const reset = () => {
        setIsTouched(false);
        setEnteredValue('');
    }


    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput;
