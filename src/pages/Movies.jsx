import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HiSearch } from "react-icons/hi";
import { FetchSearch } from 'helpers/api';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setStatus] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const quary = searchParams.get('quary') ?? '';

    useEffect(() => {
        setStatus(true)
        FetchSearch(quary)
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
    }, [quary])

    const onFormSubmit = (evt) => {
        evt.preventDefault();
        const quary = evt.currentTarget.elements.input.value.trim();
        setSearchParams(quary ? { quary } : {});
    }

    return (
        <main>
            <form autoComplete="off" onSubmit={onFormSubmit}>
                <input type="search" name="input" />
                <button><HiSearch size="16" /></button>
            </form>
            {isLoading && <Loader />}
            {error && <span>{error}</span>}
            <MovieList movies={movies}></MovieList>
        </main>
    )
};

export default Movies;