import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import { Container, InfoText, InfoWrap, Poster, PosterWrap } from './MovieInfo.styled';

const IMG_URL = "https://image.tmdb.org/t/p/w500";

export const MovieInfo = ({ details: { genres = [], title, poster_path, release_date, vote_average, overview } }) => {
    return (
        <Container>
            <PosterWrap>
                <Poster src={poster_path ? `${IMG_URL}${poster_path}` : <Loader/>} alt={title} />
            </PosterWrap>
            <InfoWrap>
                <h2>{title}{release_date ? `(${release_date.slice(0, 4)})` : ''}</h2>
                <InfoText>User Score: {vote_average ? `${Math.round(vote_average * 10)}%` : 'Empty..'}</InfoText>
                <h3>Overview</h3>
                <InfoText>{overview || "Oops..."}</InfoText>
                <h3>Genres</h3>
                <InfoText>{genres.length ? genres.map(genre => genre.name).join(", ") : "Oops..."}</InfoText>
            </InfoWrap>
                

        </Container>
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
