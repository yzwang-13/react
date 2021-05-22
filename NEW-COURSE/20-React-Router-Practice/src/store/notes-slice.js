import {createSlice} from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name: 'notesSlice',
    initialState: {
        notes: [{
            id: "123",
            author: 'wilson',
            text: ' Today is a good day'
        }],
        queriedNote: {}
    },
    reducers: {
        addNote: (state, action) => {
            const note = action.payload;
            const newNote = {
                id: note.id,
                author: note.author,
                text: note.text,
                timestamp: note.timestamp
            }
            state.notes.push(newNote)
        },
        getNote: (state, action) => {
            const queryNoteId = action.payload.noteId;
            const foundNote = state.notes.filter((note) => {
                return note.id === queryNoteId;
            });
            if (foundNote.length === 0){
                return
            }else {
                state.queriedNote = foundNote[0];
            }

        }
    }
})

export default notesSlice.reducer;

export const notesActions = notesSlice.actions;

