import React from "react";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import {Link,useParams, Route} from "react-router-dom";
import {useRouteMatch} from 'react-router-dom';

const DetailedNote = porps => {

    const params = useParams();

    const match = useRouteMatch();
    console.log(match)

    return (
        <React.Fragment>
            <HighlightedQuote />
            <Route path={`${match.url}`} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </React.Fragment>
    )
}

export default DetailedNote;
