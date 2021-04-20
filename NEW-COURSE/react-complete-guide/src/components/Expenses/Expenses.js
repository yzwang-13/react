import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";

const Expenses = (props) => {
    return (
        <Card className='expenses'>
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
