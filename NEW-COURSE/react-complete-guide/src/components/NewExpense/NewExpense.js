import './NewExpense.css';
import ExpenseFrom from "./ExpenseForm";
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


    const AddCancelClickHandler = () => {
        changeShowFormState(prevState => !prevState)
    }

    const saveExpenseDataHandler = (expenseData) => {
        props.onAddExpense(expenseData);
        AddCancelClickHandler();
    }

    return (
        <div className='new-expense'>
            {showForm &&
            <ExpenseFrom AddCancelClickHandler={AddCancelClickHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
            {!showForm && <div className='add-new-expense__actions'>
                <button onClick={AddCancelClickHandler}>Add New Expense</button>
            </div>}
        </div>
    )
}

export default NewExpense;
