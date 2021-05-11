import React, {useContext, useEffect, useRef, useState} from 'react';
import classes from './Cart.module.css';
import OrderContext from "../../Store/OrderContext";


const Backdrop = props => {
    return <div onClick={props.cancelCheckOut} className={classes.backdrop}>{props.children}</div>
}

const ModalOverlay = props => {
    return (
            <div className={classes.modal}>
                {Object.keys(props.orders).map((key, index) => {
                    if (props.orders[key].amount === 0){
                        return null
                    } else {
                        return (
                            <div>
                                <h3>{props.orders[key].name}</h3>
                                <p>${props.orders[key].price}</p>
                                <p>x {props.orders[key].amount}</p>
                                <button onClick={() => props.minusAmount(props.orders[key].id) }>-</button>
                                <button onClick={() => props.addAmount(props.orders[key].id) }>+</button>
                            </div>
                        )
                    }
                })}
                <p>Total Amount: ${props.totalPrice}</p>
                <button onClick={props.cancelCheckOut}>Close</button>
                <button>Order</button>
            </div>


    )
}

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
            />
        </div>
    )
}

export default Cart;
