import React from "react";
import Todo from "../models/todo";
import TodoLi from "./Todo";
import classes from './Todos.module.css';

const Todos: React.FC<{items: Todo[]; onRemove: (id: string) => void}> = (props) => {

    return (
        <ul className={classes.todos}>
            {props.items.map( item =>
                <TodoLi onRemove={props.onRemove.bind(null, item.id)} id={item.id} text={item.text} />
            )}
        </ul>
    )
}

export default Todos;
