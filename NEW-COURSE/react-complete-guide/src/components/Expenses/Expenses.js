import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from 'react';

const Expenses = (props) => {

    const [selectedYear, setYear] = useState(new Date().getFullYear().toString());

    const filterSelectedHandler = (event) => {
        setYear(event.target.value)
    }

    return (
        <Card className='expenses'>
            <ExpenseFilter year={selectedYear} yearSelectedHandler={filterSelectedHandler}/>
            {props.expenses.map((e) => {
                return (
                        <ExpenseItem
                            key={e.id}
                            title={e.title}
                            amount={e.amount}
                            date={e.date}
                        />
                )
            })}
        </Card>
    )
}

export default Expenses;
