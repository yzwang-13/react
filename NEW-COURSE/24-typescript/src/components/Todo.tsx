import React from "react";
import Todo from "../models/todo";
import classes from './TodoItem.module.css'

const TodoLi: React.FC<{id: string, text: string, onRemove: (event: React.MouseEvent) => void}> = (props) => {

    // const onRemoveTodo = (id: string): void => {
    //     props.onRemove(id);
    // }

    return <li className={classes.item} key={props.id} onClick={props.onRemove}>{props.text}</li>
}

export default TodoLi;
