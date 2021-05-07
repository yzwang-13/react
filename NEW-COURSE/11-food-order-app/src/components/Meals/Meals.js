import React from 'react';
import Meal from "./Meal/Meal";
import classes from './Meals.module.css';

const Meals = props => {

    return (
        <ul className={classes.meals}>
            <Meal/>
        </ul>
    )
}

export default Meals;
