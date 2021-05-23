import classes from './QuoteItem.module.css';
import {Route, Link, Redirect, Switch} from 'react-router-dom';
const moment = require('moment');

const QuoteItem = (props) => {

    const date = moment.unix(props.timestamp).format("hh:mm DD/MM/YYYY")
    return (
        <li className={classes.item}>
            <figure>{/*mark up a photo in a document*/}
                <blockquote>
                    <p>{props.text}</p>
                </blockquote>
                <figcaption>{props.author}</figcaption>
                <figcaption>{date}</figcaption>
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
