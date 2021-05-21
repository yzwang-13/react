import React from 'react';
import {Link, NavLink} from "react-router-dom";
import classes from './MainHeader.module.css';

const MainHeader = () => {

    return(
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.aaa} to="/welcome">Welcome</NavLink>
                    </li>
                    <li>
                        {/*<Link to="/products">Products</Link>*/}
                        <NavLink activeClassName={classes.aaa} to="/products">Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;
