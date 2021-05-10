import React, {useState} from 'react';
import Meal from "./Meal/Meal";
import classes from './Meals.module.css';

const Meals = props => {

    return (
        <div className={classes.meals}>
            <div className={classes.summary}>
                <h2>Delicious Food, Delivered To You</h2>
                <p>
                    Choose your favorite meal from our broad selection of available meals
                    and enjoy a delicious lunch or dinner at home.
                </p>
                <p>
                    All our meals are cooked with high-quality ingredients, just-in-time and
                    of course by experienced chefs!
                </p>
            </div>
            <ul>
                {props.meals.map(meal => <Meal key={meal.id} id={meal.id} price={meal.price} description={meal.description} name={meal.name} />)}
            </ul>
        </div>
    )
}

export default Meals;
