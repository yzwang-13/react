import React, {useRef, useState} from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import {v4} from 'uuid';
import {useDispatch, useSelector} from "react-redux";
import {postANote} from "../../store/notes-actions";
import {useHistory} from 'react-router-dom';
import {Prompt} from 'react-router-dom';


const moment = require('moment');

const QuoteForm = (props) => {
    const authorInputRef = useRef();
    const textInputRef = useRef();
    const dispatch = useDispatch();
    const [isEntering, setIsEntering] = useState(false);
    console.log('quoteform');
    const history = useHistory();

    function submitFormHandler(event) {
        //Setting setIsEntering ==> false inside of the submitFormHandler would not work
        // because that's a little bit too late. This state update would not go through,
        // before we actually triggered a navigation action.
        // Because the navigation action will be triggered
        // in submitFormHandler. So that's all one synchronous process.
        // It's one function in the end and hence the state update would not be processed
        // before we try to navigate away.

        //        setIsEntering(false);
        //         console.log(isEntering);
        //

        event.preventDefault();

        const enteredAuthor = authorInputRef.current.value;
        const enteredText = textInputRef.current.value;

        const newNote = {
            id: v4(),
            author: enteredAuthor,
            text: enteredText,
            timestamp: moment().unix()
        }
        // dispatch(notesActions.addNote(newNote));
        dispatch(postANote(newNote));
        history.push('/all-notes');

        // optional: Could validate here

        // props.onAddQuote({ author: enteredAuthor, text: enteredText });
    }

    const formFocusHandler = () => {
        setIsEntering(true);
    }

    const finishEnteringHandler = () => {
        setIsEntering(false);
        console.log(isEntering);
    }

    return (
        <React.Fragment>
            <Prompt
                when={isEntering}
                message={(location)=> "Are you sure you want to leave? All your entered data will be lost."}
            />
            <Card>
                <form onFocus={formFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
                    {props.isLoading && (
                        <div className={classes.loading}>
                            <LoadingSpinner/>
                        </div>
                    )}

                    <div className={classes.control}>
                        <label htmlFor='author'>Author</label>
                        <input type='text' id='author' ref={authorInputRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='text'>Text</label>
                        <textarea id='text' rows='5' ref={textInputRef}/>
                    </div>
                    <div className={classes.actions}>
                        <button className='btn' onClick={finishEnteringHandler}>
                            Add Note
                        </button>
                    </div>
                </form>
            </Card>
        </React.Fragment>

    );
};

export default QuoteForm;
