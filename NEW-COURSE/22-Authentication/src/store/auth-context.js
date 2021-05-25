import React, {useState, useEffect} from 'react';

let loggoutTimer;

const AuthContenxt = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {
    },
    logout: () => {
    }
})

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    // convert expiration time to milliseconds
    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainingTime = adjExpirationTime - currentTime;

    return remainingTime;

}

const retriveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationTime = localStorage.getItem('expirationTime');

    const remainingTime = calculateRemainingTime(storedExpirationTime);

    // remaining time less than 1 minute
    if (remainingTime <= 60000) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }

    return {
        token: storedToken,
        duration: remainingTime
    }
}

export const AuthContextProvider = (props) => {

    const tokenData = retriveStoredToken();
    let initialToken
    // const initialToken = localStorage.getItem('token');
    if (tokenData) {
        initialToken = tokenData.token;
    }

    const [token, setToken] = useState(initialToken);

    const useIsLoggedIn = !!token;

    const logoutHandler = useCallback (() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');

        if (loggoutTimer) {
            clearTimeout(loggoutTimer);
        }
    }, []);


    const loginHandler = (token, experiationTime) => {
        setToken(token);
        // local storage only acccepts premitive data like string number
        // it do not accept object, you need to convert it first if you wanna use
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', experiationTime);

        const remainingTime = calculateRemainingTime(experiationTime);

        loggoutTimer = setTimeout(logoutHandler, remainingTime);
    };

    useEffect( ()=> {
        if (tokenData) {
            console.log(tokenData.duration)
            loggoutTimer = setTimeout(logoutHandler, tokenData.duration)
        }
    }, [tokenData, logoutHandler])


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
