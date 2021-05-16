import React, {useContext, useEffect, useReducer, useState} from 'react';
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import OrderContext from "./Store/OrderContext";
import Cart from "./components/Cart/Cart";
import useHttp from "./hooks/use-http";

function App() {

    console.log("app.js...")

    const orderContext = useContext(OrderContext);
    const [meals, setMeals] = useState([]);

    const postRequestDataHandle = (data) => {
        // transform data
        const mealsArray = [];
        for (const key in data) {
            mealsArray.push(data[key])
        }
        setMeals(mealsArray);
    }

    const {
        isLoading: mealsIsLoading,
        hasError: mealsHasError,
        sendRequest: requestMeals
    } = useHttp(postRequestDataHandle);


    useEffect(() => {
        // make http request to get orders
        const requestConfig = {
            url: 'https://react-course-http-9f03d-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json',
            config: {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        }
        requestMeals(requestConfig);


    }, [])


    return (
        <React.Fragment>
            <Header/>
            <main>
                {!mealsIsLoading && !mealsHasError && <Meals meals={meals}/>}
                {mealsIsLoading && !mealsHasError && <p>Loading....</p>}
                {!mealsIsLoading && mealsHasError && <p>{mealsHasError}</p>}
                {orderContext.checkOut && <Cart/>}
            </main>
        </React.Fragment>
    );
}

export default App;


// const DUMMY_MEALS = [
//     {
//         id: 'm1',
//         name: 'Sushi',
//         description: 'Finest fish and veggies',
//         price: 22.99,
//     },
//     {
//         id: 'm2',
//         name: 'Schnitzel',
//         description: 'A german specialty!',
//         price: 16.5,
//     },
//     {
//         id: 'm3',
//         name: 'Barbecue Burger',
//         description: 'American, raw, meaty',
//         price: 12.99,
//     },
//     {
//         id: 'm4',
//         name: 'Green Bowl',
//         description: 'Healthy...and green...',
//         price: 18.99,
//     },
// ];
