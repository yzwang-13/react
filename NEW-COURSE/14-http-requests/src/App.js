import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

    const [movies, setMovies] = useState([]);

    async function fetchMoviesHandler() {
        const data = (await fetch('https://swapi.dev/api/films/', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })).json().then(data => {
            console.log(data.results);

            // do the transform data before displaying to match our format
            // transform the data to only what we need
            const movies = data.results.map( movie => {
                return {
                    id: movie.episode_id,
                    releaseDate: movie.release_date,
                    openingText: movie.opening_crawl,
                    title: movie.title
                }
            })
            setMovies(movies);
        });
        // const result = data.json().then( data => console.log(data));
    }

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                <MoviesList movies={movies} />
            </section>
        </React.Fragment>
    );
}

export default App;
