import React from 'react';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from 'react-redux';
import cartSlice from "../../store/cartSlice";

const Cart = (props) => {


    const cart = useSelector(state => state.cart.items);

    console.log("cart.js",cart);

    const items = {
        '123': {title: 'Test Item', id: '123', quantity: 3, total: 18, price: 6},
        '456': {title: 'Test Item', id: '456', quantity: 3, total: 18, price: 2}
    }

    const renderItems = cart ? Object.keys(cart).map(value => <CartItem item={
        {
            id: value,
            title: cart[value].title,
            quantity: cart[value].amount,
            total: cart[value].totalPrice,
            price: cart[value].price
        }
    }/>): null;

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            {(cart !== {}) && <ul>
                {renderItems}
            </ul>
            }

        </Card>
    );
};

export default Cart;
