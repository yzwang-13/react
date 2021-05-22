import {configureStore} from "@reduxjs/toolkit";
import notesSlice from "./notes-slice";
import commentSlice from "./comment-slice";

const store = configureStore({
    reducer: {
        notes: notesSlice,
        comments: commentSlice
    }
})

export default store;
