import { useState, useEffect } from "react";
import { searchMovies } from "../services/api";

export const useMovies = (query) => {
  const [movies, setMovies] = useState([]); // always array
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await searchMovies(query);
        setMovies(data || []); // safe
      } catch (err) {
        console.error(err);
        setMovies([]); // fallback
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { movies, loading };
};