import React from 'react';
import classes from './MainNavigation.module.css';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {httpStatusSliceActions} from "../../store/http-status-slice";

const MainNavigation = () => {

    const dispatch = useDispatch();

    // const linkClickedHandler = () => {
    //     // change the http status
    //     dispatch(httpStatusSliceActions.changePostNoteState());
    // }
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>Great Notes</h1>
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink to='/all-notes' activeClassName={classes.active}>All Notes</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to='/add-note' activeClassName={classes.active}>Add a Note</NavLink></li>
                </ul>
            </nav>
        </header>

    )
}

export default MainNavigation;
