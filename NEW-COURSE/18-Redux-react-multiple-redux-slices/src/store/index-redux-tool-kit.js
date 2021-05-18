import {configureStore} from '@reduxjs/toolkit';
import counterReducer from "./counter";
import authReducer from "./auth";
// use createStore passing one reducer function
// const store = createStore(counterSlice.reducer);

// use configureStore passing an object in order to pass more reducer to one single store
const store = configureStore({
    // reducer: counterSlice.reducer
    reducer: {
        aaa: counterReducer,
        auth: authReducer
    }
})





export default store;
