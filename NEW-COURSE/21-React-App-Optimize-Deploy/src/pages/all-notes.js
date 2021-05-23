import QuoteList from "../components/quotes/QuoteList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getNotes} from "../store/notes-actions";

const AllNote = porps => {

    const dispatch = useDispatch()

    useEffect(()=>{
        // initialize send http get request to load all notes
        dispatch(getNotes());

    }, []);

    const notes = useSelector(state => state.notes.notes);

    return (
        <QuoteList quotes={notes} />
    )
}

export default AllNote;
