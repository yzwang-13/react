import Counter from './components/Counter';
import Header from "./components/Header";
import React from "react";
import Auth from "./components/Auth";
import {useSelector} from 'react-redux';
import UserProfile from "./components/UserProfile";

function App() {
    // get access to the a new slice of state in the redux store
    const isLoggedIn = useSelector((state => state.auth.isAuthenticated));
    console.log(isLoggedIn);

    return (
        <React.Fragment>
            <Header/>
            {!isLoggedIn && <Auth/>}
            {isLoggedIn && <UserProfile />}
            {isLoggedIn && <Counter/>}
        </React.Fragment>

    );
}

export default App;
