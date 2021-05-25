import {Switch, Route, Redirect} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContenxt from "./store/auth-context";
import {useContext} from "react";

function App() {

    const authcontext = useContext(AuthContenxt);

    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <HomePage/>
                </Route>
                {
                    !authcontext.isLoggedIn &&
                    <Route path='/auth'>
                        <AuthPage/>
                    </Route>
                }
                <Route path='/profile'>
                    {authcontext.isLoggedIn && <UserProfile/>}
                    {!authcontext.isLoggedIn && <Redirect to='/auth'/>}
                </Route>
                <Route path='*'>
                    <Redirect to='/'/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
