import redux from 'redux';

const counterReducer = (oldState = {counter: 0}, action) => {
    if (action.type === 'increment'){
        return {counter: oldState.counter + 1};
    } else if (action.type === 'decrement'){
        return {counter: oldState.counter - 1};
    }
    return oldState;
}

const store = redux.createStore(counterReducer);

export default store;
