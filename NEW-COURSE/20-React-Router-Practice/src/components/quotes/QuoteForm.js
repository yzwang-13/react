import { useRef } from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import { v4 } from 'uuid';
import {useDispatch} from "react-redux";
import {notesActions} from "../../store/notes-slice";
const moment = require('moment');

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const dispatch = useDispatch();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    const newNote = {
      id: v4(),
      author: enteredAuthor,
      text: enteredText,
      timestamp: moment().unix()
    }
    dispatch(notesActions.addNote(newNote));


    // optional: Could validate here

    // props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef} />
        </div>
        <div className={classes.actions}>
          <button className='btn' onClick={submitFormHandler}>Add Note</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
