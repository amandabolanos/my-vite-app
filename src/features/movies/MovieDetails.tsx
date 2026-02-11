import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "../../services/movie.service";
import type { Movie } from "../../models/movie.model";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getMovieById(id)
        .then(setMovie)
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#38050F]">
        <p className="text-lg font-semibold text-[#CC3E5E] animate-pulse">
          Loading movie...
        </p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#38050F] text-white">
        <h1 className="text-2xl font-bold text-[#CC3E5E]">Movie not found</h1>
        <Link
          to="/movies"
          className="mt-4 px-6 py-3 bg-[#941737] text-white rounded-lg shadow-md hover:bg-[#CC3E5E] transition"
        >
          ← Back to Movies
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#38050F] to-[#660924] p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-[#660924]">{movie.title}</h2>
          <p className="mt-4 text-[#941737] text-base">{movie.description}</p>
          <Link
            to="/movies"
            className="inline-block mt-6 px-6 py-3 bg-[#941737] text-white rounded-lg shadow-md hover:bg-[#CC3E5E] transition"
          >
            ← Back to Movies
          </Link>
        </div>
      </div>
    </div>
  );
}