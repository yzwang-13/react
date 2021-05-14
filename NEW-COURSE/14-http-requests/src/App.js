import React, {useEffect, useState, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import Spinner from "./UI/Spinner/Spinner";

function App() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMoviesHandler = useCallback( async () => {
        setIsLoading(true);
        setError(null);
        try {
            // error url https://swapi.dev/api/film/
            const response = await fetch('https://swapi.dev/api/films/', {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            console.log(response);
            if (!response.ok){
                throw new Error('Ahh, shit Something went wrong');
            }

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
        } catch (e) {
            // updating the error state
            setError(e.message);
        }

        setIsLoading(false);



    }, []);

    useEffect( () => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler])

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                {!isLoading && movies.length > 0 && <MoviesList movies={movies}/>}
                {!isLoading && movies.length === 0 && !error && <p>Found No Movies! Try to click the button to fetch movies</p>}
                {!isLoading && error && <p>{error}</p>}
                {isLoading && <Spinner/>}

            </section>
        </React.Fragment>
    );
}

export default App;
