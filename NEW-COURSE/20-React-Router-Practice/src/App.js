import MainNavigation from "./components/layout/MainNavigation";
import {Route} from 'react-router-dom';
import QuoteList from "./components/quotes/QuoteList";
import classes from '../src/components/layout/Layout.module.css';
import QuoteForm from "./components/quotes/QuoteForm";
import HighlightedQuote from "./components/quotes/HighlightedQuote";
import Comments from "./components/comments/Comments";
import {useSelector} from "react-redux";


const DUMMY_Quotes = [

    {
        id: "123",
        author: 'wilson',
        text: ' Today is a good day'
    }
]

function App() {

    const notes = useSelector(state => state.notes.notes);
    // console.log(notes);

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
            </main>
        </div>
    );
}

export default App;
