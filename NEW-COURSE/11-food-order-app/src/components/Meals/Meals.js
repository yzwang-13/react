import React, {useState} from 'react';
import Meal from "./Meal/Meal";
import classes from './Meals.module.css';

const Meals = props => {

    const [orders, updateOrders] = useState({});

    const ordersUpdateHandler = newOrder => {
        updateOrders(preOrders => {
            if (preOrders[newOrder.id]) {
                preOrders[newOrder.id] += newOrder.amount
                return preOrders;
            }else {
                preOrders[newOrder.id] = newOrder.amount;
                return preOrders
            }
        });

        console.log(orders);
    }


    return (
        <div className={classes.meals}>
            <ul>
                {props.meals.map(meal => <Meal updateOrders={ordersUpdateHandler} key={meal.id} id={meal.id} price={meal.price} description={meal.description} name={meal.name} />)}
            </ul>
        </div>
    )
}

export default Meals;
