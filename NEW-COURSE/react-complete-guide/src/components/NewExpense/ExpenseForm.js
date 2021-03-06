import './ExpenseFrom.css';
import {useState} from 'react';
import {uuid} from 'uuidv4';

const ExpenseForm = (props) => {

    // the logic is kind of the same but now it's in one state object
    // managed as one piece of state instead of three separate slices.
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    // we still use multi state approach
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    const titleChangeHandler = event => {
        // need to copy old state so that other values won't get lost
        // setUserInput((preState) => {
        //     return {...preState, enteredTitle: event.target.value};
        // })

        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = event => {

        // setUserInput((preState) => {
        //     return {...preState, enteredAmount: event.target.value};
        // })

        setEnteredAmount(event.target.value);


    }

    const dateChangeHandler = event => {

        // setUserInput((preState) => {
        //     return {...preState, enteredDate: event.target.value};
        // })
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // console.log(event);

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
            id: uuid()
        }

        // after settign the two way binding, we can clear the inputs
        // after submitting
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }
    return (<form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input value={enteredTitle} onChange={titleChangeHandler} type="text"/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input value={enteredAmount} onChange={amountChangeHandler} type="number" min='0.01' step='0.01'/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input value={enteredDate} onChange={dateChangeHandler} type="date" min='2019-01-01'
                       max='2022-12-31'/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.AddCancelClickHandler}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>)


}

export default ExpenseForm;
