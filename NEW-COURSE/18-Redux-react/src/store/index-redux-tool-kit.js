import {createSlice, configureStore} from '@reduxjs/toolkit';
import {createStore} from "redux";

const initialState = {counter: 0, showCounter: false};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    // all reducers this slice needs
    reducers: {
        increment (state) {
            // allow to mutate the state
            // because internally toolkit will clone the state for us
            state.counter++;
        },
        decrement (state) { state.counter--},
        // payload passed inside action
        increase (state, action) {state.counter = state.counter + action.payload},
        toggleCounter (state) {state.showCounter = !state.showCounter}
    }
});


// use createStore passing one reducer function
// const store = createStore(counterSlice.reducer);

// use configureStore passing an object
const store = configureStore({
    // reducer: counterSlice.reducer
    reducer: {counterRedecer: counterSlice.reducer}
})

// export access to actions(dispatch actions)
export const counterActions = counterSlice.actions;
export default store;
