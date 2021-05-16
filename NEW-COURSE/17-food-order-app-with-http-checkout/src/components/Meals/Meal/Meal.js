import React, {useContext, useState} from 'react';
import classes from './Meal.module.css';
import OrderContext from "../../../Store/OrderContext";
import Input from "../../UI/Input";

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
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>${props.price.toFixed(2)}</div>
            </div>
            <Input label='Amount' input={{
                id: 'price'+'__'+`${props.id}`,
                type: "number",
                onChange: addAmountHandler,
                value: enteredAmount,
                min: 1,
                step: "any"
            }}/>
            {/*<input type="number" onChange={addAmountHandler} value={enteredAmount} min={1} step="any"/>*/}
            <button onClick={submitNewOrder}>+Add</button>
        </li>
    )
}

export default Meal;
