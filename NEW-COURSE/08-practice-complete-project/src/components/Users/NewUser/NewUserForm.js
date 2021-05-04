import Button from "../../UI/Button";
import classes from './NewUserForm.module.css';
import {useState} from 'react';
import {uuid} from 'uuidv4';

const NewUserForm = props => {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState();

    const nameChangeHandler = event => {
        setUserName(event.target.value);
    }

    const ageChangeHandler = event => {
        setUserAge(+event.target.value);
    }

    const formSubmitHandler = event => {
        event.preventDefault();
        if (userAge.toString().trim().length === 0 || userName.trim().length ===0 ){
            props.error(true)
            return
        }
        const formData =
            {
                id: uuid(),
                name: userName,
                age: userAge
            }

        setUserName('');
        setUserAge('');
        props.addUser(formData);
    }

    return (
        <div className={classes.form_control}>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor='username'>Name:</label>
                <input onChange={nameChangeHandler} value={userName} type="text"/>
                <label htmlFor='age'>Age:</label>
                <input onChange={ageChangeHandler} value={Number(userAge).toString()} type="number"  step={1}
                       max={128}/>
                <Button type='submit'>Add User</Button>
            </form>
        </div>

    )
}

export default NewUserForm;
