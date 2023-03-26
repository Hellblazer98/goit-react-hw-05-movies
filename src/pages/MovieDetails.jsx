import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { useState, useEffect, useRef, Suspense } from 'react';
import { getMovieDetails } from "helpers/api";
import { Loader } from 'components/Loader/Loader';
import { MovieInfo } from "components/MovieInfo/MovieInfo";

const MovieDetails = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const goBack = useRef(location.state?.from ?? "/");

    const [details, setDetails] = useState({});
    const [isLoading, setStatus] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setStatus(true)
        getMovieDetails(movieId)
            .then(data => {
                setDetails(data);
            })
            .catch(err => {
                setDetails({});
                setError(String(err));
            })
            .finally(() => {
                setStatus(false);
            })
    }, [movieId]);

    return (
        <main>
            <div>
                <Link to={goBack.current}>Go back</Link>
                {details && <MovieInfo details={details} />}
                {isLoading && <Loader />}
                {error && <span>{error}</span>}
            </div>
            <p>Additional information</p>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>

            
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </main>
    )
}

export default MovieDetails;