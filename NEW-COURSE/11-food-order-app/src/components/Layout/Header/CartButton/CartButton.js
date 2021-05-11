import React, {useContext, useEffect, useState} from 'react';
import classes from './CartButton.module.css';
import cartIcon from '../../../../img/outline_shopping_cart_white_24dp.png';
import OrderContext from "../../../../Store/OrderContext";

const CartButton = props => {

    const orderContext = useContext(OrderContext);

    const [numOfOrders, updateOrders]  = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            updateOrders(orderContext.numOfOrders);
        }, 300);
    }, [orderContext.numOfOrders])

    return (
            <button onClick={orderContext.cancelCheckOut} className={numOfOrders === orderContext.numOfOrders ? `${classes.button}` : `${classes.button} ${classes.bump}`}>
                <span className={classes.icon} ><img src={cartIcon} alt=""/></span>
                <span>Your Cart</span>
                <span className={`${classes.badge} `} >{orderContext.numOfOrders}</span>
            </button>

    )
}

export default CartButton;
