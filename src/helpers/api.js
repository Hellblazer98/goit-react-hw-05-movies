import axios from "axios";

const API_KEY = "afe52aa8ce58d403415529b103529ed7";
const BASE_URL = "https://api.themoviedb.org/3/"

export const getTrendingMovies = async () => {
    const resp = await axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
    return resp.data;
}

export const FetchSearch = async (searchQuary) => {
    const resp = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuary}`);
    return resp.data;
}

export const getMovieDetails = async (movieId) => {
    const resp = await axios.get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
    return resp.data;
}

export const getMovieCast = async (movieId) => {
    const resp = await axios.get(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`);
    return resp.data;
}

export const getMovieReviews = async (movieId) => {
    const resp = await axios.get(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`);
    return resp.data;
}