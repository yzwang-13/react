import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from 'react';

const Expenses = (props) => {

    return (
        <Card className='expenses'>
            <ExpenseFilter year={props.year} yearSelectedHandler={props.changeYear}/>
            {props.expenses.length === 0 && (<p> No expenses found </p>)}
            {props.expenses.length !== 0 && (props.expenses.map((e) =>
                (
                    <ExpenseItem
                        key={e.id}
                        title={e.title}
                        amount={e.amount}
                        date={e.date}
                    />
                )))
            }
        </Card>
    )
}

export default Expenses;
