import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { getMovies } from "../../services/movie.service";
import type { Movie } from "../../models/movie.model";
import { Link } from "react-router-dom";

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies()
      .then(setMovies)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#38050F]">
        <p className="text-lg font-semibold text-[#CC3E5E] animate-pulse">
          Loading movies...
        </p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#38050F] to-[#660924]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-[#CC3E5E] hover:text-[#941737] transition mb-6"
        >
          &larr; Back to Home
        </Link>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#CC3E5E]">
            Movies
          </h1>
        </header>
        <MovieList movies={movies} />
      </div>
    </section>
  );
}