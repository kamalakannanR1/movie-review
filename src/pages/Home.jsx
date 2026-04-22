import { useState } from "react";
import { useMovies } from "../hooks/useMovies";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";

function Home() {
  const [query, setQuery] = useState("batman");
  const [filters, setFilters] = useState({});

  const { movies = [], loading } = useMovies(query);

  const handleFilter = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  // ✅ SAFE filtering
  const filteredMovies = (movies || []).filter((movie) => {
    const yearMatch = filters.year
      ? movie.release_date?.includes(filters.year)
      : true;

    const ratingMatch = filters.rating
      ? movie.vote_average >= Number(filters.rating)
      : true;

    return yearMatch && ratingMatch;
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Movie Review App</h1>

      <SearchBar onSearch={setQuery} />
      <Filters onFilter={handleFilter} />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <MovieList movies={filteredMovies} />
      )}
    </div>
  );
}

export default Home;