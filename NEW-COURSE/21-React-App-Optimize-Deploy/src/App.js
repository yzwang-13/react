import React, {Suspense} from "react";
import MainNavigation from "./components/layout/MainNavigation";
import {Route, Redirect, Switch} from 'react-router-dom';
import classes from '../src/components/layout/Layout.module.css';
// import {useDispatch, useSelector} from "react-redux";
// import NoQuotesFound from "./components/quotes/NoQuotesFound";
// import AllNote from "./pages/all-notes";
// import NewNote from "./pages/new-note";
// import DetailedNote from "./pages/detailed-note";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getNotes} from "./store/notes-actions";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AllNote = React.lazy(() => import("./pages/all-notes"));
const NewNote = React.lazy(() => import("./pages/new-note"));
const NoQuotesFound = React.lazy(() => import("./components/quotes/NoQuotesFound"));
const DetailedNote = React.lazy(() => import("./pages/detailed-note"));

function App() {
    console.log('app.js')

    // const notes = useSelector(state => state.notes.notes);
    // const dispatch = useDispatch();
    // console.log(notes);
    const dispatch = useDispatch()

    useEffect(()=>{
        // initialize send http get request to load all notes
        dispatch(getNotes());

    }, []);

    return (
        <div>
            <Suspense fallback={<div className='centered'><LoadingSpinner /></div>}>
                <MainNavigation/>
                <main className={classes.main}>
                    <Switch>
                        <Route path='/all-notes' exact>
                            <AllNote/>
                        </Route>
                        <Route path='/add-note'>
                            <NewNote/>
                        </Route>
                        <Route path='/' exact>
                            <Redirect to='/all-notes'/>
                        </Route>
                        <Route path={`/all-notes/:noteId`}>
                            <DetailedNote/>
                        </Route>
                        <Route path='*'>
                            <NoQuotesFound/>
                        </Route>
                    </Switch>
                </main>
            </Suspense>
        </div>
    );
}

export default App;
