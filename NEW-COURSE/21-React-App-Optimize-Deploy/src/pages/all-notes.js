import QuoteList from "../components/quotes/QuoteList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getNotes} from "../store/notes-actions";

const AllNote = porps => {

    const notes = useSelector(state => state.notes.notes);

    return (
        <QuoteList quotes={notes} />
    )
}

export default AllNote;
