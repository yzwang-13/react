import classes from './HighlightedQuote.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {notesActions} from "../../store/notes-slice";
import {useParams} from 'react-router-dom';

const HighlightedQuote = (props) => {

    const dispatch = useDispatch();
    const note = useSelector(state => state.notes.queriedNote);
    const params = useParams();
    const noteId = params.noteId;

    useEffect(()=> {
        dispatch(notesActions.getNote({noteId: noteId}));
    }, [])

    return (
        <figure className={classes.quote}>
            <p>{note.text}</p>
            <figcaption>{note.author}</figcaption>
        </figure>
    );
};

export default HighlightedQuote;
