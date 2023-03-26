import { Loader } from "components/Loader/Loader";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getMovieReviews } from "helpers/api";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setStatus] = useState(false);
    const [error, setError] = useState(null);


    const { movieId } = useParams();

    useEffect(() => {
        setStatus(true)
        getMovieReviews(movieId)
            .then(data => {
                setReviews(data.results);
            })
            .catch(err => {
                setReviews([]);
                setError(String(err));
                console.log(err)
            })
            .finally(() => {
                setStatus(false);
            })
    }, [movieId]);

    return (
        <section>
            {isLoading && <Loader />}
            {error && <span>{error}</span>}

            {reviews.length ? 
                <ul>
                    {reviews.map(({ id, author, content }) => 
                        <li key={id}>
                            <h3>Author: {author || "?"}</h3>
                            <p>{content}</p>
                        </li>
                        )}
                </ul>

            : <p>Sorry, we don't have any reviews for this movie.</p>}
        </section>
    )
    
}

export default Reviews;