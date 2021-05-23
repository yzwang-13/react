import {useRef} from 'react';

import classes from './NewCommentForm.module.css';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {v4} from "uuid";
import {commentActions} from "../../store/comment-slice";
import moment from "moment";

const NewCommentForm = (props) => {
    const commentTextRef = useRef();

    const dispatch = useDispatch();
    const params = useParams();
    const noteId = params.noteId;

    const submitFormHandler = (event) => {
        event.preventDefault();
        const noteId = params.noteId;
        // console.log(noteId);

        const payload = {
            noteId: noteId,
            id: v4(),
            comment: commentTextRef.current.value,
            timestamp: moment().unix()
        }

        dispatch(commentActions.addComment(payload));
        // optional: Could validate here

        // send comment to server
    };

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            <div className={classes.control} onSubmit={submitFormHandler}>
                <label htmlFor='comment'>Your Comment</label>
                <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button className='btn'>Add Comment</button>
            </div>
        </form>
    );
};

export default NewCommentForm;
