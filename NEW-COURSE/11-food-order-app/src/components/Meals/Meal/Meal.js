import React from 'react';
import classes from './Meal.module.css';

const Meal = props => {
    return (
        <li className={classes.meal}>
            <h3>Sushi</h3>
            <p className={classes.description}>Finest fish and veggies</p>
            <p className={classes.price}>$22.99</p>
            <p>Amount</p>
            <input type='amount' min={0} />
            <button>+Add</button>
        </li>
    )
}

export default Meal;
