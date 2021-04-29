import './App.css';
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from 'react';

const App = () => {

    const DUMMY_EXPENSES = [
        {
            id: 'e1',
            title: '2020 Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: 'e2',
            title: '2021 New TV',
            amount: 799.49,
            date: new Date(2021, 2, 12)
        },
        {
            id: 'e3',
            title: '2022 Car Insurance',
            amount: 294.67,
            date: new Date(2019, 2, 28),
        },
        {
            id: 'e4',
            title: '2019 New Desk (Wooden)',
            amount: 450,
            date: new Date(2019, 5, 12),
        },
    ];
    const [expenses, updateExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = expense => {
        // console.log(expense.date.getFullYear().toString() + "addExpenseHandler")
        setYear(expense.date.getFullYear().toString());
        // console.log(JSON.stringify(expense) + "In app.js");
        updateExpenses(prevState => {
            return [expense, ...prevState]
        })
    }

    const [selectedYear, setYear] = useState(new Date().getFullYear().toString());

    const filterSelectedHandler = (event) => {
        setYear(event.target.value);
        console.log(event.target.value + "filterSelectedHandler");
    }


    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses year={selectedYear} changeYear={filterSelectedHandler} expenses={expenses.filter((e)=>{
                return e.date.getFullYear().toString() === selectedYear
            })}/>
        </div>
    );
}

export default App;
