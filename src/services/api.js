import axios from "axios";

const API_KEY ="0739236227a3b3e90075a4eb4aad02e7";
const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovies = async (query) => {
  const res = await axios.get(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query },
  });
  return res.data.results; // ✅ return array
};

export const getMovieDetails = async (id) => {
  const res = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: { api_key: API_KEY },
  });
  return res.data;
};