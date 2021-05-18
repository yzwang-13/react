import {createStore} from 'redux';

const initialState = {counter: 0, showCounter: false};

const counterReducer = (oldState = initialState, action) => {
    if (action.type === 'increment'){
        return {
            counter: oldState.counter + 1,
            showCounter: oldState.showCounter
        };
    }

    if (action.type === 'decrement'){
        return {
            counter: oldState.counter - 1,
            showCounter: oldState.showCounter
        };
    }

    if (action.type === 'increase') {
        return {
            counter: oldState.counter + action.amount,
            showCounter: oldState.showCounter
        }
    }

    if (action.type === 'toggle'){
        return {
            ...oldState,
            showCounter: !oldState.showCounter,
        }
    }
    return oldState;
}

const store = createStore(counterReducer);

export default store;
