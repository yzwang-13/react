import MainNavigation from "./components/layout/MainNavigation";
import {Route, Redirect} from 'react-router-dom';
import QuoteList from "./components/quotes/QuoteList";
import classes from '../src/components/layout/Layout.module.css';
import QuoteForm from "./components/quotes/QuoteForm";
import HighlightedQuote from "./components/quotes/HighlightedQuote";
import Comments from "./components/comments/Comments";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getNotes} from "./store/notes-actions";


function App() {
    console.log('app.js')

    const notes = useSelector(state => state.notes.notes);
    const dispatch = useDispatch();
    // console.log(notes);

    useEffect(()=>{
        // initialize send http get request to load all notes
        dispatch(getNotes());

    }, []);

    return (
        <div>
            <MainNavigation/>
            <main className={classes.main}>
                <Route path='/all-notes' exact>
                    <QuoteList quotes={notes}/>
                </Route>
                <Route path='/add-note'>
                    <QuoteForm/>
                </Route>
                <Route path='/all-notes/:noteId' exact>
                    <HighlightedQuote />
                    <Comments/>
                </Route>
                <Route path='/' exact>
                    <Redirect to='/all-notes' />
                </Route>

            </main>
        </div>
    );
}

export default App;
