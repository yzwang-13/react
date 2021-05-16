import React, {useContext, useEffect, useReducer, useState} from 'react';
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import OrderContext from "./Store/OrderContext";
import Cart from "./components/Cart/Cart";

function App() {

    const orderContext = useContext(OrderContext);
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchOrders = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://react-course-http-9f03d-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json',
                {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
            if (!response.ok) {
                throw new Error('Ahh something went wrong!')
            }
            const recipes = await response.json();

            // transform data
            const mealsArray = [];
            for (const key in recipes) {
                mealsArray.push(recipes[key])
            }
            setMeals(mealsArray);
        } catch (e) {
            console.log(e.message)
            setError(e.message)
        }
        // console.log(mealsArray)
        setIsLoading(false);

        // console.log(recipes);
    }

    useEffect(() => {
        // make http request to get orders
        fetchOrders();
    }, [])


    return (
        <React.Fragment>
            <Header/>
            <main>
                {!isLoading && !error && <Meals meals={meals}/>}
                {isLoading && !error && <p>Loading....</p>}
                {!isLoading && error && <p>{error}</p>}
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
