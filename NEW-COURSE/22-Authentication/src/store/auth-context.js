import React, {useState} from 'react';

const AuthContenxt = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
})

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);

    const useIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token)
    };

    const logoutHandler = () => {
        setToken(null);
    };


    const contextValue = {
        token: token,
        isLoggedIn: useIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }
    return <AuthContenxt.Provider value={contextValue}>
        {props.children}
    </AuthContenxt.Provider>
}

export default AuthContenxt;
