import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';

const IMG_URL = "https://image.tmdb.org/t/p/w500";

export const MovieInfo = ({ details: { genres = [], title, poster_path, release_date, vote_average, overview } }) => {
    return (
        <div>
            <div>
                <img src={poster_path ? `${IMG_URL}${poster_path}` : <Loader/>} alt={title} />
                <h2>{title}{release_date ? `(${release_date.slice(0, 4)})` : ''}</h2>
                <p>User Score: {vote_average ? `${Math.round(vote_average * 10)}%` : 'Empty..'}</p>
                <h3>Overview</h3>
                <p>{overview || "Oops..."}</p>
                <h3>Genres</h3>
                <p>{genres.length ? genres.map(genre => genre.name).join(", ") : "Oops..."}</p>
            </div>
        </div>
    )
}

MovieInfo.propTypes = {
  details: PropTypes.shape({
      title: PropTypes.string,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
      vote_average: PropTypes.number,
      overview: PropTypes.string,
    }).isRequired,
};
