import {configureStore} from "@reduxjs/toolkit";
import notesSlice from "./notes-slice";
import commentSlice from "./comment-slice";
import httpStatusSlice from "./http-status-slice";

const store = configureStore({
    reducer: {
        notes: notesSlice,
        comments: commentSlice,
        httpStatus: httpStatusSlice,
    }
})

export default store;
