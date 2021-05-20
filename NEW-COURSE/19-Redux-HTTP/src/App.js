import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState, Fragment} from "react";
import {uiSliceActions} from "./store/uiSlice";
import Notification from "./components/UI/Notification";
import {fetchCartData, sendCartData} from "./store/cart-actions";

let isInitial = true;

function App() {
    console.log("app.js")
    const dispatch = useDispatch();
    const showCart = useSelector(state => {
        // console.log(state)
        return state.cartToggle.show
    });

    const cart = useSelector(state => state.cart);
    console.log('app.js', cart);
    const notification = useSelector(state => state.cartToggle.notification);

    useEffect( ()=> {
        dispatch(fetchCartData())
    },[]);

    // Way 2 to send Http Request
    useEffect( ()=> {
        if (!isInitial){
            console.log(cart.totalQuantity);
            dispatch(sendCartData(cart))
        }else {
            isInitial = false;
        }
    }, [cart, dispatch])

    // // Way 1 to send HTTP request
    // // watch state.cart.items changes and send HTTP request to firebase
    // useEffect(()=>{
    //     const sendCartData = async () => {
    //         dispatch(uiSliceActions.showNotification({
    //             status: 'pending',
    //             title: 'Sending...',
    //             message: 'Sending cart data!'
    //         }))
    //        const response = await fetch('https://react-course-http-9f03d-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
    //             {
    //                 method: 'PUT',
    //                 body: JSON.stringify(cart)
    //             });
    //        if (!response.ok) {
    //             throw new Error('Sending cart data failed!')
    //        }
    //
    //         dispatch(uiSliceActions.showNotification({
    //             status: 'success',
    //             title: 'Success!',
    //             message: 'Sent cart data successfully!'
    //         }))
    //
    //     }
    //
    //     if (isInitial) {
    //         isInitial = false;
    //         return
    //     } else {
    //         sendCartData().catch(error => {
    //             dispatch(uiSliceActions.showNotification({
    //                 status: 'error',
    //                 title: 'Error!',
    //                 message: 'Sending cart data failed!'
    //             }))
    //         })
    //     }
    // },[cart, dispatch]);



    return (
        <Fragment>
            {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
            <Layout>
                {showCart && <Cart/>}
                <Products/>
            </Layout>
        </Fragment>

    );
}

export default App;
