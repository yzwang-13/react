import {createSlice} from "@reduxjs/toolkit";

const initState = {
    postNewNoteSuccessful: false
}

const httpStatusSlice = createSlice({
    name: 'http-status',
    initialState: initState,
    reducers: {
        changePostNoteState: state => {
            const currentStatus = state.postNewNoteSuccessful;
            state.postNewNoteSuccessful = !currentStatus;
        }
    }
});

export default httpStatusSlice.reducer;
export const httpStatusSliceActions = httpStatusSlice.actions;
