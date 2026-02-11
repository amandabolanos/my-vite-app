import type { Movie } from "../../models/movie.model";
import MovieCard from "./MovieCard";

interface Props {
  movies: Movie[];
}

export default function MovieList({ movies }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-200 p-8">
      <h1 className="text-4xl font-extrabold text-center text-sky-800 mb-12 tracking-wide uppercase">
      </h1>

      {movies.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No movies available
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
