import {useRef, useState, useContext} from 'react';

import classes from './AuthForm.module.css';
import AuthContenxt from "../../store/auth-context";
import {useHistory} from 'react-router-dom';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const authContext = useContext(AuthContenxt);
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        // Optional: Validation ...

        setIsLoading(true);
        let url;
        if (isLogin) {
            //  https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA7bhKogucrucI6MH6dJorn5p_CfZy0mPI'

        } else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA7bhKogucrucI6MH6dJorn5p_CfZy0mPI'
            // API: https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setIsLoading(false);
            if (res.ok) {
                // res.json().then(data => {
                //     console.log(data);
                // })

                return res.json();
            } else {
                // res.json().then(data => {
                //     throw new Error(data.error.message)
                // });
                throw new Error("Oops something went wrong");
            }
        }).then(dataInSuccess => {
            console.log(dataInSuccess);
            const expirationTimeinMilliSeconds = new Date(new Date().getTime() + (+dataInSuccess.expiresIn * 1000));
            authContext.login(dataInSuccess.idToken, expirationTimeinMilliSeconds.toISOString());
            history.replace('/');

        }).catch(err => {
            console.log(err);
            alert(err);
        })

    }

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={onSubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required ref={emailRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input type='password' id='password' required ref={passwordRef}/>
                </div>
                <div className={classes.actions}>
                    {!isLoading && <button type='submit'>{isLogin ? 'Login' : 'Create Account'}</button>}
                    {isLoading && <p>Sending request.....</p>}
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AuthForm;
