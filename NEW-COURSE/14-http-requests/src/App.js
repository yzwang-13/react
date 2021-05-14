import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import Spinner from "./UI/Spinner/Spinner";

function App() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    async function fetchMoviesHandler() {
        setIsLoading(true);
        const response = await fetch('https://swapi.dev/api/films/', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();

        // do the transform data before displaying to match our format
        // transform the data to only what we need
        const movies = data.results.map(movie => {
            return {
                id: movie.episode_id,
                releaseDate: movie.release_date,
                openingText: movie.opening_crawl,
                title: movie.title
            }
        })
        setMovies(movies);
        setIsLoading(false);
        // const result = data.json().then( data => console.log(data));
    }

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                {!isLoading && movies.length >0 && <MoviesList movies={movies}/>}
                {!isLoading && movies.length === 0 && <p>Found No Movies!</p>}
                {isLoading && <Spinner/>}
            </section>
        </React.Fragment>
    );
}

export default App;
