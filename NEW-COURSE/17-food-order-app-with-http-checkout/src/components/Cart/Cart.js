import React, {useContext, useEffect, useRef, useState} from 'react';
import classes from './Cart.module.css';
import OrderContext from "../../Store/OrderContext";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";

const Cart = props => {

    const orderContext = useContext(OrderContext);

    return (
        <div>
            <Backdrop cancelCheckOut={orderContext.cancelCheckOut}/>
            <ModalOverlay
                cancelCheckOut={orderContext.cancelCheckOut}
                totalPrice={orderContext.totalPrice}
                orders={orderContext.orders}
                minusAmount={orderContext.minusAmount}
                addAmount={orderContext.addAmount}
                checkout={orderContext.checkoutHandler}
            />
        </div>
    )
}

export default Cart;
