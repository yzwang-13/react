import './NewExpense.css';
import ExpenseFrom from "./ExpenseForm";

const NewExpense = (props) => {

    // const saveExpenseDataHandler = (enteredExpenseData) => {
    //     const expenseData = {
    //         ...enteredExpenseData,
    //         id: Math.random().toString()
    //     }
    //     console.log(expenseData)
    // }

    return (
        <div className='new-expense'>
            <ExpenseFrom onSaveExpenseData={props.onAddExpense} />
        </div>
    )
}

export default NewExpense;
