import {useEffect, useState} from "react";

const useFrom = (validate=()=>{}) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const enteredValueIsValid = validate(enteredValue);
    const hasError = !enteredValueIsValid && isTouched;
    console.log(hasError)

    const onEnteredValueChange = (event) => {
        setIsTouched(true);
        setEnteredValue(event.target.value);
    }

    const reset = () => {
        setIsTouched(false);
        setEnteredValue('');
    }

    const onBlurHandler = () => {
        setIsTouched(true);
    }

    return {
        enteredValue,
        enteredValueIsValid,
        hasError,
        onBlurHandler,
        onEnteredValueChange,
        reset
    }

};

export default useFrom;
