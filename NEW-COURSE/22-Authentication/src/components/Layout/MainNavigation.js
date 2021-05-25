import {Link} from 'react-router-dom';
import {useContext} from 'react';

import classes from './MainNavigation.module.css';
import AuthContenxt from "../../store/auth-context";

const MainNavigation = () => {
    const authContext = useContext(AuthContenxt);
    const isLoggedIn = authContext.isLoggedIn;

    const onLogoutHandler = () => {
        authContext.logout();
    }
    return (
        <header className={classes.header}>
            <Link to='/'>
                <div className={classes.logo}>React Auth</div>
            </Link>
            <nav>
                <ul>
                    {!isLoggedIn && <li>
                        <Link to='/auth'>Login</Link>
                    </li>}
                    {isLoggedIn && <li>
                        <Link to='/profile'>Profile</Link>
                    </li>}
                    {isLoggedIn && <li>
                        <button onClick={onLogoutHandler}>Logout</button>
                    </li>}
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
