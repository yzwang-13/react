import React, {useContext, useState} from 'react';
import classes from './Meal.module.css';
import OrderContext from "../../Context/OrderContext";

const Meal = props => {

    const [enteredAmount, updateEnteredAmount] = useState(1);
    const orderContext = useContext(OrderContext);


    const addAmountHandler = (event) => {
        if (event.target.type === 'number') {           // coming from input
            updateEnteredAmount(+event.target.value);
            return
        }
    }

    const submitNewOrder = () => {
        orderContext.addNewOrder({id: props.id, amount: enteredAmount, name: props.name, price: props.price});
    }

    return (
        <li className={classes.meal}>
            <h3>{props.name}</h3>
            <p>Amount</p>
            <input type="number" onChange={addAmountHandler} value={enteredAmount} min={1} step="any"/>
            <p className={classes.description}>{props.description}</p>
            <p className={classes.price}>${props.price}</p>

            <button onClick={submitNewOrder}>+Add</button>
        </li>
    )
}

export default Meal;
