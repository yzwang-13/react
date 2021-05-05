import Button from "../../UI/Button";
import classes from './NewUserForm.module.css';
import {useRef, useState} from 'react';
import {uuid} from 'uuidv4';

const NewUserForm = props => {

    // create a reference using useRef from react to manipulate the real dom element
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [userName, setUserName] = useState('');
    // const [userAge, setUserAge] = useState();

    // const nameChangeHandler = event => {
    //     setUserName(event.target.value);
    // }
    //
    // const ageChangeHandler = event => {
    //     setUserAge(+event.target.value);
    // }

    const formSubmitHandler = event => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = nameInputRef.current.value;

        console.log(ageInputRef.current.value);
        if (enteredAge.toString().trim().length === 0 || enteredName.trim().length ===0 ){
            props.error(true)
            return
        }
        const formData =
            {
                id: uuid(),
                name: enteredName,
                age: enteredAge
            }

        // setUserName('');
        // setUserAge('');

        // shouldn't manipulate dom until in a case of resetting input values
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        props.addUser(formData);
    }

    return (
        <div className={classes.form_control}>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor='username'>Name:</label>
                <input ref={nameInputRef}  type="text"/>
                <label htmlFor='age'>Age:</label>
                <input ref={ageInputRef} type="number"  step={1}
                       max={128}/>
                <Button type='submit'>Add User</Button>
            </form>
        </div>

    )
}

export default NewUserForm;
