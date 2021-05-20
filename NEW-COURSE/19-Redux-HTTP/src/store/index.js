import {createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import uiSlice from "./uiSlice";


const store = configureStore(
    {
        reducer: {
            cart: cartSlice.reducer,
            cartToggle: uiSlice.reducer
        }
    }
)

export default store;
