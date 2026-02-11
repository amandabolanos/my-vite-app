import type { Movie } from "../models/movie.model";

const MOVIES_URL = "/data/movies.json";

export async function getMovies(): Promise<Movie[]> {
  const response = await fetch(MOVIES_URL);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch movies.json: (status ${response.status} ${response.statusText})`
    );
  }

  const data = await response.json();
  console.log("Fetched movies data:", data);
  return data as Movie[];
}

export async function getMovieById(id: string): Promise<Movie | null> {
  const movies = await getMovies();
  const movie = movies.find((movie) => movie.id === id);
  return movie || null;
}