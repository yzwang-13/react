import React from 'react';
import classes from './MainNavigation.module.css';
import {NavLink} from "react-router-dom";

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>Great Notes</h1>
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink to='/all-notes'>All Notes</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to='/add-note'>Add a Note</NavLink></li>
                </ul>
            </nav>
        </header>

    )
}

export default MainNavigation;
