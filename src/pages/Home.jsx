import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'helpers/api';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setStatus] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setStatus(true)
        getTrendingMovies()
            .then(data => {
                setMovies(data.results);

            })
            .catch(err => {
                setMovies([])
                setError(String(err));
            })
            .finally(() => {
                setStatus(false);
            })
    }, [])


    return (
        <main>
            <h1>Trending today</h1>
            {isLoading && <Loader />}
            {error && <span>{error}</span>}
            <MovieList movies={movies}></MovieList>
        </main>
    )

}

export default Home;