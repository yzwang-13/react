import classes from './ProfileForm.module.css';
import {useRef, useContext} from 'react';
import AuthContenxt from "../../store/auth-context";
import {useHistory} from 'react-router-dom';

const ProfileForm = () => {
    const passwordRef = useRef();
    const authContext = useContext(AuthContenxt);
    const history = useHistory();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredNewPassword = passwordRef.current.value;
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA7bhKogucrucI6MH6dJorn5p_CfZy0mPI', {
            method: 'POST',
            body: JSON.stringify({
                idToken: authContext.token,
                password: enteredNewPassword,
                returnSecureToken: false
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( res => {
            // assume always succeeds (not realistic)
            console.log(res);
            history.replace('/');
        })
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes.control}>
                <label htmlFor='new-password'>New Password</label>
                <input type='password' id='new-password' ref={passwordRef} minLength='7'/>
            </div>
            <div className={classes.action}>
                <button type='submit'>Change Password</button>
            </div>
        </form>
    );
}

export default ProfileForm;
