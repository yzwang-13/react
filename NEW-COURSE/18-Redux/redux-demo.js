
const redux = require('redux');

// this function will be executed once redux.createStore(counterReducer)
// is executed(store is created for the first time), hence we need to pass
// a initial state value to make it work.
const counterReducer = (oldState = {counter: 0}, action) => {
    if (action.type === 'increment'){
        // return a new state
        return {
            counter: oldState.counter + 1
        }
    }else if (action.type === 'decrement'){
        return {
            counter: oldState.counter - 1
        }
    }
    // return a unchanged state
    return {
        counter: oldState.counter
    }
}

const store = redux.createStore(counterReducer);

// define a subscriber to be executed every time redux state changes
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
}

// tell store the function that needs to fire when there is a change in state
store.subscribe(counterSubscriber);

// dispatch an action(call reducer function => then automatically call subscriber), parameter is always an object, always expecting
// {type: A_UNIQUE_STRING}
store.dispatch({type: 'increment'});
// store.dispatch({type: 'decrement'});
