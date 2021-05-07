import React, {useState, useEffect} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from "./context/auth-context";

function App() {


    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    useEffect(() => {
        if (storedUserLoggedInInformation === 'LOGGED_IN') {
            setIsLoggedIn(true);
        }
    }, []);

    // will trigger an infinite loop
    //   if (storedUserLoggedInInformation === 'LOGGED_IN') {
    //     setIsLoggedIn(true);
    // }

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways

        localStorage.setItem('isLoggedIn', 'LOGGED_IN');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    };

    return (
        <AuthContext.Provider value={{isLoggedIn: isLoggedIn}}>
            <MainHeader onLogout={logoutHandler}/>
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler}/>}
                {isLoggedIn && <Home onLogout={logoutHandler}/>}
            </main>
        </AuthContext.Provider>
    );
}

export default App;
