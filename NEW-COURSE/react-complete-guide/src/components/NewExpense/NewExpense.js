import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import {useState} from 'react';


const NewExpense = (props) => {

    // const saveExpenseDataHandler = (enteredExpenseData) => {
    //     const expenseData = {
    //         ...enteredExpenseData,
    //         id: Math.random().toString()
    //     }
    //     console.log(expenseData)
    // }

    const [showForm, changeShowFormState] = useState(false);


    const addCancelClickHandler = () => {
        changeShowFormState(prevState => !prevState)
    }

    const saveExpenseDataHandler = (expenseData) => {
        props.onAddExpense(expenseData);
        console.log(expenseData);
        addCancelClickHandler();
    }

    return (
        <div className='new-expense'>
            {showForm &&
            <ExpenseForm AddCancelClickHandler={addCancelClickHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
            {!showForm && <div className='add-new-expense__actions'>
                <button onClick={addCancelClickHandler}>Add New Expense</button>
            </div>}
        </div>
    )
}

export default NewExpense;
