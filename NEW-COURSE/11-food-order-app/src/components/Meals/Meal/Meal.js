import React, {useState} from 'react';
import classes from './Meal.module.css';

const Meal = props => {

    const [enteredAmount, updateEnteredAmount] = useState(1);


    const addAmountHandler = (event) => {
        if (event.target.type === 'number') {           // coming from input
            updateEnteredAmount(+event.target.value);
            return
        }
    }

    const submitNewOrder = () => {
        props.updateOrders({id: props.id, amount: enteredAmount});
    }

    return (
        <li className={classes.meal}>
            <h3>{props.name}</h3>
            <p className={classes.description}>{props.description}</p>
            <p className={classes.price}>${props.price}</p>
            <p>Amount</p>
            <input type="number" onChange={addAmountHandler} value={enteredAmount} min={1} step="any"/>
            <button onClick={submitNewOrder}>+Add</button>
        </li>
    )
}

export default Meal;
