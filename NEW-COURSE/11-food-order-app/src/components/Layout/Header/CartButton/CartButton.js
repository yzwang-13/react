import React from 'react';
import classes from './CartButton.module.css';
import cartIcon from '../../../../img/outline_shopping_cart_white_24dp.png';

const CartButton = props => {
    return (
            <button className={classes.button}>
                <span className={classes.icon} ><img src={cartIcon} alt=""/></span>
                <span>Your Cart</span>
                <span className={classes.badge}>3</span>
            </button>

    )
}

export default CartButton;
