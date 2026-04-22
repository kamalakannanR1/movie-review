import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className="cursor-pointer border p-2 rounded hover:shadow"
    >
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        className="w-full"
      />
      <h2 className="font-bold mt-2">{movie.title}</h2>
      <p className="text-sm">{movie.release_date}</p>
    </div>
  );
};

export default MovieCard;