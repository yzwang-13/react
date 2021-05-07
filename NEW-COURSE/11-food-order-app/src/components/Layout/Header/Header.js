import React from 'react';
import classes from './Header.module.css';
import mealImg from '../../../img/meals.jpeg';
import CartButton from "./CartButton/CartButton";

const Header = props => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <CartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImg} alt='A table full of delicious food'/>
            </div>
        </React.Fragment>

    )
}

export default Header;
