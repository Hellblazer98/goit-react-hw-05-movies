import { Loader } from "components/Loader/Loader";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getMovieReviews } from "helpers/api";
import { ReviewList, ReviewText } from "./Reviews.styled";

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
                <ReviewList>
                    {reviews.map(({ id, author, content }) => 
                        <li key={id}>
                            <h3>Author: {author || "?"}</h3>
                            <ReviewText>{content}</ReviewText>
                        </li>
                        )}
                </ReviewList>

            : <p>Sorry, we don't have any reviews for this movie.</p>}
        </section>
    )
    
}

export default Reviews;