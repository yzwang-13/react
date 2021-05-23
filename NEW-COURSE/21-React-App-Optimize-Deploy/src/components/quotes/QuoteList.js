import {Fragment} from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import {useHistory} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const sortNotes = (notes, isAscending) => {
    // console.log(notes)
    console.log(isAscending)
    return notes.sort((noteA, noteB) => {
        // console.log(noteA,noteB)
        if (isAscending) {
            return noteA.timestamp > noteB.timestamp ? 1 : -1
        } else {
            return noteA.timestamp < noteB.timestamp ? 1 : -1
        }
    })
}

const QuoteList = (props) => {
    console.log("QuoteList")
    const history = useHistory();
    const location = useLocation();
    // console.log(location);

    const queryParams = new URLSearchParams(location.search);
    // console.log(queryParams.get('sort'))
    const isSortAscending = queryParams.get('sort') === 'ascending';

    // must deep copy the arry to pass to sort function use slice() or [...props.quotes]
    // because the data we get is from redux and it doesn't allow us to mutate the data
    const sortedQuotes = sortNotes(props.quotes.slice(), isSortAscending);

    const changeSortingHandler = () => {
        history.push({
           pathname:  '/all-notes',
            search: `?sort=${(isSortAscending ? 'descending' : 'ascending')}`
        });
        // history.push('/all-notes?sort=' + (isSortAscending ? 'descending' : 'ascending'));
    }

    return (
        <Fragment>
            <div className={classes.sorting}>
                <button onClick={changeSortingHandler}>
                    Sort {isSortAscending ? 'Descending' : 'Ascending'}
                </button>
            </div>
            <ul className={classes.list}>
                {sortedQuotes.map((quote) => (
                    <QuoteItem
                        key={quote.id}
                        id={quote.id}
                        author={quote.author}
                        text={quote.text}
                        timestamp={quote.timestamp}
                    />
                ))}
            </ul>
        </Fragment>
    );
};

export default QuoteList;
