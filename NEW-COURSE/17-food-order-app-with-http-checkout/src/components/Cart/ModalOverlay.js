import classes from "./Cart.module.css";
import React from "react";
import useFrom from "../../hooks/use-form";

const ModalOverlay = props => {

    // useEffect(()=>{
    //     change_form_valid_state
    // },[all_input_isValid_denpendencies])

    const {
        enteredValue: enteredName,
        enteredValueIsValid: nameIsValid,
        hasError: nameHasError,
        onBlurHandler: nameBlur,
        onEnteredValueChange: nameChangeHandler
    } = useFrom(value => value.trim().length !== 0);

    const nameInputClass = nameHasError ? `${classes.invalid}` : "";

    return (
        <div className={classes.modal}>
            {console.log(props.orders)}
            {Object.keys(props.orders).map((key, index) => {
                return (
                    <div>
                        <h3>{props.orders[key].name}</h3>
                        <p>${props.orders[key].price}</p>
                        <p>x {props.orders[key].amount}</p>
                        <button onClick={() => props.minusAmount(props.orders[key].id)}>-</button>
                        <button onClick={() => props.addAmount(props.orders[key].id)}>+</button>
                    </div>
                )
            })}
            <p>Total Amount: ${props.totalPrice}</p>
            {Object.keys(props.orders).length >= 1 &&
            <form onSubmit={props.checkout}>
                <div className={nameInputClass}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id='name'
                           value={enteredName}
                           onChange={nameChangeHandler}
                           onBlur={nameBlur}
                    />
                </div>
                <div>
                    <label htmlFor="street">Street</label>
                    <input type="text" id='street'/>
                </div>
                <div>
                    <label htmlFor="postal">Postal Code</label>
                    <input type="text" id='postal'/>
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input type="text" id='city'/>
                </div>
                <button type='submit'>Order</button>
            </form>}

            <button onClick={props.cancelCheckOut}>Close</button>

        </div>
    )
}

export default ModalOverlay;
