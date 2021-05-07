import React, {useEffect, useState} from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {
    },
    onLogin: (email, password) => {
    }
})

export const AuthContextProvider = (props) => {

    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    useEffect(() => {
        if (storedUserLoggedInInformation === 'LOGGED_IN') {
            loginHandler();
        }
    }, []);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', 'LOGGED_IN');
        setIsLoggedIn(true);
    };

    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
    }}>
        {props.children}
    </AuthContext.Provider>
}
export default AuthContext;
