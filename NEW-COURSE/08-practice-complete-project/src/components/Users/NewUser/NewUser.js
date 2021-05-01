import NewUserForm from "./NewUserForm";
import Button from "../../UI/Button";
import classes from './NewUser.module.css';

const NewUser = props => {
    return (
        <div className={classes.new_user}>
            <NewUserForm error={props.error} addUser={props.addUser}/>
        </div>
        )
}

export default NewUser
