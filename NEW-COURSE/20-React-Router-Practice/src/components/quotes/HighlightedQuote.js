import classes from './HighlightedQuote.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {notesActions} from "../../store/notes-slice";
import {useParams, Route} from 'react-router-dom';
import Comments from "../comments/Comments";

const HighlightedQuote = (props) => {


    const dispatch = useDispatch();
    const note = useSelector(state => state.notes.queriedNote);
    const params = useParams();
    const noteId = params.noteId;

    useEffect(()=> {
        dispatch(notesActions.getNote({noteId: noteId}));
    }, [noteId, dispatch])

    return (
        <figure className={classes.quote}>
            <p>{note.text}</p>
            <figcaption>{note.author}</figcaption>
        </figure>

    );
};

export default HighlightedQuote;
