import React, {useState} from 'react';
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
    items:  [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
})


const TodosContextProvider: React.FC = (props) => {

    const [todos, setTodos] = useState<Todo[]>([]);

    // const todos: Todo[] = [
    //     new Todo("React is full of fun"),
    //     new Todo("Typescript is a new thing for me")
    // ]

    const onAddTodoHandler = (text: string) => {
        const newTodo: Todo = new Todo(text);
        setTodos( (preState) => {
            return [newTodo,...preState];
        })
    }

    const todoRemoveHandler = (id: string) => {
        setTodos( prevState => {
            const newState = prevState.filter(e => e.id !== id);
            return newState;
        })
    }

    const contextValue: TodosContextObj = {
        items:  todos,
        addTodo: onAddTodoHandler,
        removeTodo: todoRemoveHandler
    };


    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider;
