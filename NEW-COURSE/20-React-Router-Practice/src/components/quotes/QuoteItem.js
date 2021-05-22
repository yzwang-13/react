import classes from './QuoteItem.module.css';
import {Route, Link, Redirect} from 'react-router-dom';
import HighlightedQuote from "./HighlightedQuote";
import Comments from "../comments/Comments";

const QuoteItem = (props) => {
    return (

        <li className={classes.item}>
            <figure>{/*mark up a photo in a document*/}
                <blockquote>
                    <p>{props.text}</p>
                </blockquote>
                <figcaption>{props.author}</figcaption>
            </figure>
            <Route>
                <Link className='btn' to={`/all-notes/${props.id}`}>
                    View Fullscreen
                </Link>
            </Route>

        </li>
    );
};

export default QuoteItem;
