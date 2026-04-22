import { useNavigate } from "react-router-dom";
import { useState } from "react";
import RatingStars from "./RatingStars";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  return (
    <div className="border p-2 rounded hover:shadow">
      <img
        onClick={() => navigate(`/movie/${movie.id}`)}
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            : "https://via.placeholder.com/200x300"
        }
        alt={movie.title}
        className="w-full cursor-pointer"
      />

      <h2 className="font-bold mt-2">{movie.title}</h2>
      <p className="text-sm">{movie.release_date}</p>

      <RatingStars rating={rating} setRating={setRating} />
    </div>
  );
};

export default MovieCard;