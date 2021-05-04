import React, {useState} from 'react';
import Users from "./components/Users/Users";
import NewUser from "./components/Users/NewUser/NewUser";
import {uuid} from 'uuidv4';
import ErrorModal from "./components/ErrorHandler/ErrorModal";



function App() {
    const initialUsers = [
        {
            id: uuid(),
            name: 'Wilson',
            age: 28
        },
        {
            id: uuid(),
            name: 'Evelyn',
            age: 18
        },
        {
            id: uuid(),
            name: 'Max',
            age: 31
        },
    ]

    const onDeleteUserHandler = event => {
        console.log(event.target.id);
        updateUsers( prevState => {
            return [
                ...prevState.filter(e => {
                    return e.id !== event.target.id
                })
            ]
        })
        console.log(users)

    }

    const onAddUserHandler = user => {
        updateUsers(prevUsers => {
           return [user, ...prevUsers]
        })
    }

    const [users, updateUsers] = useState(initialUsers);
    const [error, updateError] = useState(false);

    const cancelErrorModalHandler = data => {
        updateError(false);
    }

    const setError = error => {
        updateError(error);
    }

    let content = (
        <>
            <NewUser error={setError} addUser={onAddUserHandler}/>
            <Users users={users} onDeleteUserHandler={onDeleteUserHandler}/>
        </>

    )

    if (error) {
        content = (
            <React.Fragment>
                <NewUser error={updateError} addUser={onAddUserHandler}/>
                <Users users={users} onDeleteUserHandler={onDeleteUserHandler}/>
                <ErrorModal onCancel={cancelErrorModalHandler}/>
            </React.Fragment>
        )
    }

  return (<div>
      {content}
  </div>);
}

export default App;
