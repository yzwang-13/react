import {createSlice} from "@reduxjs/toolkit";

const initialCounterState = {counter: 0, showCounter: false};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
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

export default counterSlice.reducer;

// export access to counterSlice actions(dispatch actions)
export const counterActions = counterSlice.actions;
