import { useState, useEffect } from "react";
import { searchMovies } from "../services/api";

export const useMovies = (query) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) return;
    searchMovies(query).then(setMovies);
  }, [query]);

  return movies;
};