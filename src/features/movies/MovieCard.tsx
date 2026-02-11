import { Link } from "react-router-dom";
import type { Movie } from "../../models/movie.model";

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  return (
    <Link
      to={`/movies/${movie.id}`}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 overflow-hidden"
    >
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-[#660924]">
          {movie.title}
        </h2>
        <p className="text-[#941737] text-sm line-clamp-2">
          {movie.description}
        </p>
      </div>
    </Link>
  );
}
