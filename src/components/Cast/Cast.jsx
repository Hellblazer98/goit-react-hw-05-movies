import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getMovieCast } from "helpers/api";
import NotFound from '../../image/not-found.jpg';
import { Loader } from "components/Loader/Loader";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

const Cast = () => {
    const [cast, setCast] = useState([]);
    const [isLoading, setStatus] = useState(false);
    const [error, setError] = useState(null);


    const { movieId } = useParams();

    useEffect(() => {
        setStatus(true)
        getMovieCast(movieId)
            .then(data => {
                setCast(data.cast);
            })
            .catch(err => {
                setCast([]);
                setError(String(err));
            })
            .finally(() => {
                setStatus(false);
            })
    }, [movieId]);

    return (
        <section>
        {isLoading && <Loader />}
        {error && <span>{error}</span>}
            {cast.length ?
                <ul>
                    {cast.map(({ character, name, credit_id, profile_path, original_name }) =>
                        <li key={credit_id}>
                            <img src={profile_path ? `${IMG_URL}${profile_path}` : NotFound} alt={original_name} />
                            <h3>{name}</h3>
                            <p>Character: {character}</p>
                        </li>
                    )}
                </ul>
                : <p>Sorry, we don't have cast information for this movie.</p>}

        </section>
    )
}

export default Cast