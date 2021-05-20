// calling below function
//  dispatch(sendCartData(cart))

import {uiSliceActions} from "./uiSlice";
import {cartActions} from "./cartSlice";

const request = async (dispatch, getState) => {
    // make an http request to get the initial data
    const fetchCart = async () => {
        const response = await fetch('https://react-course-http-9f03d-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');
        const cartData = await response.json();
        console.log(cartData)
        // need to transform data in case empty
        dispatch(cartActions.init({
            cart: {
                items: cartData.items || {},
                totalQuantity: cartData.totalQuantity || 0
            }
        }));
        return cartData;
    }

    try {
        await fetchCart()
    } catch (e) {
        fetchCart().catch(error => {
            dispatch(uiSliceActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }))
        })
    }


}

export const fetchCartData = () => {
    return request;
}

export const sendCartData = (cartData) => {
    // we're creating a function sendCartData, which immediately, without doing anything else,
    //
    // returns another function,
    //
    // a async function.
    console.log("sendCartData", cartData);
    return async (dispatchFunction, getState) => {
        console.log('inside thunk sendCartData:', getState());
        dispatchFunction(uiSliceActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }))
        const sendRequest = async () => {
            const response = await fetch('https://react-course-http-9f03d-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cartData)
                });
            if (!response.ok) {
                throw new Error('Sending cart data failed!')
            }
        }

        try {
            await sendRequest();

            dispatchFunction(uiSliceActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!'
            }))
        } catch (e) {
            sendCartData().catch(error => {
                dispatchFunction(uiSliceActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!'
                }))
            })
        }


    }

}
