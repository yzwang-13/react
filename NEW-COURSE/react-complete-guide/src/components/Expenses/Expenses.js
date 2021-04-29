import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from 'react';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

    return (
        <Card className='expenses'>
            <ExpenseFilter year={props.year} yearSelectedHandler={props.changeYear}/>
            <ExpensesChart expenses={props.expenses}/>
            <ExpensesList items={props.expenses}/>
        </Card>
    )
}

export default Expenses;
