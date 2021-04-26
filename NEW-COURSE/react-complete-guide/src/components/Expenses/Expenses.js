import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from 'react';

const Expenses = (props) => {

    let expensesContent = <p> No expenses found </p>;
    if (props.expenses.length !== 0) {
        expensesContent = props.expenses.map((e) =>
            (
                <ExpenseItem
                    key={e.id}
                    title={e.title}
                    amount={e.amount}
                    date={e.date}
                />
            ))
    }


    return (
        <Card className='expenses'>
            <ExpenseFilter year={props.year} yearSelectedHandler={props.changeYear}/>
            {expensesContent}
            }
        </Card>
    )
}

export default Expenses;
