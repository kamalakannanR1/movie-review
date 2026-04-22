import MovieCard from "./MovieCard";

const MovieList = ({ movies = [] }) => {
  if (!Array.isArray(movies) || movies.length === 0) {
    return <p className="text-gray-500">No movies found</p>;
  }

  return (
    <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;