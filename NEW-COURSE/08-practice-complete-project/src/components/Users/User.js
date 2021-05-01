import classes from './User.module.css';

const User = props => {
    return (
        <div onClick={props.onDeleteUser} className={classes.user} id={props.user.id} >
            <p>{props.user.name}</p>
            <p>({props.user.age} years old)</p>
        </div>
    )
}

export default User;
