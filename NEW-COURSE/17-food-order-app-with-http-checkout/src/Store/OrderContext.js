import React, {useReducer, useState} from 'react';
import useHttp from "../hooks/use-http";

const OrderContext = React.createContext({
    checkOut: false,
    cancelCheckOut: () => {
    },
    orders: {},
    totalPrice: 0,
    addAmount: () => {
    },
    minusAmount: () => {
    },
    addNewOrder: () => {
    },
    numOfOrders: 0,
    checkoutHandler: () => {
    }
})

const reducer = (lastState, action) => {
    if (action.type === 'UPDATE_ORDERS') {
        if (lastState.orders[action.value.id]) {
            // update old item
            lastState.orders[action.value.id].amount += action.value.amount;
            return {
                orders: lastState.orders,
                numberOfItems: lastState.numberOfItems += action.value.amount,
                totalPrice: lastState.totalPrice += (action.value.amount * lastState.orders[action.value.id].price)
            }
        } else {
            // new item comes in
            lastState.orders[action.value.id] = {
                amount: action.value.amount,
                name: action.value.name,
                price: action.value.price,
                id: action.value.id,
            };
            return {
                orders: lastState.orders,
                numberOfItems: lastState.numberOfItems += action.value.amount,
                totalPrice: lastState.totalPrice += action.value.price * action.value.amount
            }
        }
    }
    if (action.type === 'REMOVE_ONE') {
        lastState.orders[action.value].amount -= 1;
        const newPrice = lastState.totalPrice -= lastState.orders[action.value].price;
        if (lastState.orders[action.value].amount === 0) {
            delete lastState.orders[action.value];
        }
        return {
            orders: lastState.orders,
            numberOfItems: lastState.numberOfItems -= 1,
            totalPrice: newPrice
        };
    }

    if (action.type === 'ADD_ONE') {
        lastState.orders[action.value].amount += 1;
        return {
            orders: lastState.orders,
            numberOfItems: lastState.numberOfItems += 1,
            totalPrice: lastState.totalPrice += lastState.orders[action.value].price
        };
    }

    return {orders: {}, numberOfItems: 0, totalPrice: 0};
}

export const OrderContextProvider = props => {

    const [ordersState, dispatchOrders] = useReducer(reducer, {orders: {}, numberOfItems: 0, totalPrice: 0});

    const [checkOut, updateCheckOut] = useState(false);

    const newOrderHandler = newOrder => {
        // console.log(newOrder)
        dispatchOrders({
            type: 'UPDATE_ORDERS',
            value: newOrder
        })
        console.log(ordersState.orders);
        console.log(ordersState.totalPrice);

    }

    const checkOutHandler = () => {
        console.log('updateCheckOut')
        updateCheckOut(prevState => {
            return !prevState
        })
    }

    const minusAmountHandler = (id) => {
        // remove one in cart according to id
        console.log('removing', id);
        dispatchOrders(
            {
                type: 'REMOVE_ONE',
                value: id
            }
        )
    }

    const addAmountHandler = (id) => {
        // add one in cart according to id
        console.log('adding', id);
        dispatchOrders(
            {
                type: 'ADD_ONE',
                value: id
            }
        )
    }

    // const requestConfig = {
    //     url: 'https://react-course-http-9f03d-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json',
    //     config: {
    //         method: 'GET',
    //         mode: 'cors',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     }
    // }
    // requestMeals(requestConfig);

    const checkoutHandler = event => {
        event.preventDefault();
        // console.log(event.target.name.value);
        // console.log(event.target.street.value);
        // console.log(event.target.postal.value);
        // console.log(event.target.city.value);

        const orderData = {
            order: ordersState.orders,
            totalPrice: ordersState.totalPrice,
            contact: {
                name: event.target.name.value,
                street: event.target.street.value,
                postal: event.target.postal.value,
                city: event.target.city.value
            }
        }

        const requestConfig = {
            url: 'https://react-course-http-9f03d-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',
            config: {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            }
        }

        requestMeals(requestConfig);
    }

    const handleResponse = (response) => {
        console.log(response);
    }

    const {
        sendRequest: requestMeals
    } = useHttp(handleResponse);

    return <OrderContext.Provider value={
        {
            checkOut: checkOut,
            cancelCheckOut: checkOutHandler,
            orders: ordersState.orders,
            totalPrice: ordersState.totalPrice,
            addAmount: addAmountHandler,
            minusAmount: minusAmountHandler,
            addNewOrder: newOrderHandler,
            numOfOrders: ordersState.numberOfItems,
            checkoutHandler: checkoutHandler
        }
    }>
        {props.children}
    </OrderContext.Provider>
}

export default OrderContext;
