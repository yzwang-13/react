import classes from './Counter.module.css';
import {useSelector, useDispatch, connect} from "react-redux";
import {Component} from "react";
import {counterActions} from "../store/index-redux-tool-kit";

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const showCounter = useSelector(state => state.showCounter);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        // dispatch({type: 'increment'});
        dispatch(counterActions.increment());
    };

    const decrementHandler = () => {
        // dispatch({type: 'decrement'});
        dispatch(counterActions.decrement());
    };

    const increaseHandler = () => {
        // dispatch({type: 'increase', amount: 5})
        dispatch(counterActions.increase(5)); // {type: UNIQUE_IDENTIFIER, payload: 5}

    }

    const toggleCounterHandler = () => {
        // dispatch({type: 'toggle'});
        dispatch(counterActions.toggleCounter());
    };

    return (
        <main className={classes.counter}>
            {showCounter && <div>
                <h1>Redux Counter</h1>
                <div className={classes.value}>{counter}</div>
                <div>
                    <button onClick={incrementHandler}>Increment</button>
                    <button onClick={increaseHandler}>Increase by 5</button>
                    <button onClick={decrementHandler}>Decrement</button>
                </div>
            </div>}
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;

// class Counter extends Component {
//
//     incrementHandler() {
//         this.props.propsPointer1();
//     }
//     decrementHandler() {
//         this.props.propsPointer2();
//     }
//     toggleCounterHandler() {
//
//     }
//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.ccc}</div>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//                     <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//             </main>
//         );
//     }
// }
//
// const mapStateToProps = state => {
//     return {
//         ccc: state.counter
//     }
// }
//
// const mapDispatchToProps = dispatch => {
//     return {
//         propsPointer1: () => dispatch({type: 'increment'}),
//         propsPointer2: () => dispatch({type: 'decrement'})
//
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
