import {createSlice} from "@reduxjs/toolkit";


const commentSlice = createSlice({
    name: 'commentslice',
    initialState: {comments: {}, querriedComment: []},
    reducers: {
        addComment: (state, action) => {
            const comment = action.payload;
            const noteId = action.payload.noteId;
            console.log(noteId)
            const newCommment = {
                id: comment.id,
                comment: comment.comment,
                timestamp: comment.timestamp
            }
            if (noteId in state.comments) {
                state.comments[`${noteId}`].push(newCommment);
            }else {
                const newCommentArray = [newCommment];
                state.comments[`${noteId}`] = newCommentArray;
            }
        },
        getComment: (state, action) => {
            const noteId = action.payload.noteId;
            if (! (noteId in state.comments)){
                return ;
            }
            state.querriedComment.push(...state.comments[`${noteId}`])
        }
    }

})

export default commentSlice.reducer;

export const commentActions = commentSlice.actions;
