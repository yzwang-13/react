import React, {useState, useEffect, useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext, {AuthContextProvider} from "./context/auth-context";

function App() {

    const ctxData = useContext(AuthContext);



    // will trigger an infinite loop
    //   if (storedUserLoggedInInformation === 'LOGGED_IN') {
    //     setIsLoggedIn(true);
    // }

    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const loginHandler = (email, password) => {
    //     // We should of course check email and password
    //     // But it's just a dummy/ demo anyways
    //
    //     localStorage.setItem('isLoggedIn', 'LOGGED_IN');
    //     setIsLoggedIn(true);
    // };

    // const logoutHandler = () => {
    //     setIsLoggedIn(false);
    //     localStorage.removeItem('isLoggedIn');
    // };

    return (
        <React.Fragment>
            <MainHeader/>
            <main>
                {!ctxData.isLoggedIn && <Login/>}
                {ctxData.isLoggedIn && <Home />}
            </main>
        </React.Fragment>
    );
}

export default App;
