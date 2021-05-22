import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import {useDispatch, useSelector} from "react-redux";
import {commentActions} from "../../store/comment-slice";

const Comments = () => {
    console.log('comments')
    const [isAddingComment, setIsAddingComment] = useState(false);
    const dispatch = useDispatch()
    const comments = useSelector(state => state.comments.comments);
    const params = useParams();
    const noteId = params.noteId;

    const startAddCommentHandler = () => {
        setIsAddingComment(true);
    };

    console.log(comments)

    useEffect(()=>{
        dispatch(commentActions.getComment(noteId))
    }, [])

    const renderComments = []
    if (typeof comments[`${noteId}`] !== "undefined"){
        renderComments.push(...comments[`${noteId}`].map(comment => <p>{comment.comment}</p>))
    }
    return (
        <section className={classes.comments}>
            <h2>User Comments</h2>
            {!isAddingComment && (
                <button className='btn' onClick={startAddCommentHandler}>
                    Add a Comment
                </button>
            )}
            {isAddingComment && <NewCommentForm/>}
            {renderComments}
        </section>
    );
};

export default Comments;
