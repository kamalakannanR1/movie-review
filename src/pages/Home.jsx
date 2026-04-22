import { useState } from "react";
import { useMovies } from "../hooks/useMovies";
import MovieList from "../components/MovieList";

function Home() {
  const [query, setQuery] = useState("batman");
  const { movies, loading } = useMovies(query);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Movie Review App</h1>

      <input
        type="text"
        placeholder="Search movies..."
        className="border p-2 mb-4 w-full"
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  );
}

export default Home;