import classes from './Users.module.css'
import User from "./User";
import {useState} from 'react';

const Users = props => {

    const content = props.users.map(user => {
        return (
            <User
                key={user.id}
                user={user}
                onDeleteUser={props.onDeleteUserHandler}
            />
        )
    })


    return (
        <div className={classes.users}>
            <div className={classes.users__inner}>
                {content}
            </div>
        </div>
    )
}

export default Users;
