import {notesActions} from "./notes-slice";
import {httpStatusSliceActions} from "./http-status-slice";

// get all notes from backed
const getNotesRequest = async (dispatch, getState) => {
    const response = await fetch('https://react-course-http-9f03d-default-rtdb.asia-southeast1.firebasedatabase.app/notes.json');
    if (response.ok) {
        const notes = await response.json();
        // prepare the data to initialize the store
        if (notes === null){
            dispatch(notesActions.init({notes: [], queriedNote: {}}));
        } else {
            const notes_array = [];
            for (const key in notes) {
                notes_array.push(notes[key])
            }
            const prepared_notes = {
                notes: notes_array || [],
                queriedNote: {}
            }
            dispatch(notesActions.init(prepared_notes));
        }

    }
}


// post a note to the backend
export const postANote = (note) => {
    return async (dispatch, getState) => {
        // console.log(getState().notes.queriedNote);
        dispatch(httpStatusSliceActions.changePostNoteState());
        const response = await fetch('https://react-course-http-9f03d-default-rtdb.asia-southeast1.firebasedatabase.app/notes.json',
            {
                method: 'POST',
                body: JSON.stringify(note)
            });
        if (response.ok){
            console.log("add a new note dispatched")
            dispatch(notesActions.addNote(note));
            dispatch(httpStatusSliceActions.changePostNoteState());
        }
    };
}


export const getNotes = () => {
    return getNotesRequest;
}
