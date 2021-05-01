import Button from "../../UI/Button";
import classes from './NewUserForm.module.css';
import {useState} from 'react';
import {uuid} from 'uuidv4';

const NewUserForm = props => {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState(0);

    const nameChangeHandler = event => {
        setUserName(event.target.value);
    }

    const ageChangeHandler = event => {
        setUserAge(+event.target.value);
    }

    const formSubmitHandler = event => {
        event.preventDefault();
        const formData =
            {
                id: uuid(),
                name: userName,
                age: userAge
            }
        if (userAge < 0){
            props.error(true)
            return
        }
        props.addUser(formData);
    }

    return (
        <div className={classes.form_control}>
            <form onSubmit={formSubmitHandler}>
                <label>Name:</label>
                <input onChange={nameChangeHandler} value={userName} type="text"/>
                <label>Age:</label>
                <input onChange={ageChangeHandler} value={Number(userAge).toString()} type="number"  step={1}
                       max={128}/>
                <Button content='Add User' type='submit'/>
            </form>
        </div>

    )
}

export default NewUserForm;
