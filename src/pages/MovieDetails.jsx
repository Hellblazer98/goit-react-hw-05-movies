import { useParams, useLocation, Outlet } from "react-router-dom";
import { useState, useEffect, useRef, Suspense } from 'react';
import { getMovieDetails } from "helpers/api";
import { Loader } from 'components/Loader/Loader';
import { MovieInfo } from "components/MovieInfo/MovieInfo";
import { GoBackLink } from "components/SharedLayout/SharedLayout.styled";
import { HiArrowLeft } from "react-icons/hi";
import { LinkDetails, List } from "components/Cast/Cast.styled";

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
                <GoBackLink to={goBack.current}><HiArrowLeft size='12'/>Go back</GoBackLink>
                {details && <MovieInfo details={details} />}
                {isLoading && <Loader />}
                {error && <span>{error}</span>}
            </div>
            <p>Additional information</p>
            <List>
                <li>
                    <LinkDetails to="cast">Cast</LinkDetails>
                </li>
                <li>
                    <LinkDetails to="reviews">Reviews</LinkDetails>
                </li>
            </List>

            
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </main>
    )
}

export default MovieDetails;