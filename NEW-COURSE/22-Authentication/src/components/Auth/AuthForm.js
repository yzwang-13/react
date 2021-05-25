import {useRef, useState} from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

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
    if (isLogin) {

    }else {
      // API: https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA7bhKogucrucI6MH6dJorn5p_CfZy0mPI', {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then( res => {
        setIsLoading(false);
        if (res.ok){
          res.json().then( data => {
            console.log(data);
          })
        } else {
          res.json().then( data => {
            console.log(data);
            alert(data.error.message);
          });
        }
      })
    }

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
          <input type='password' id='password' required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button type='submit' >{isLogin ? 'Login' : 'Create Account'}</button>}
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
