import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { fetchPopular, fetchTopRated } from '../services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchPopular();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  return (
    <div className="movies-container">
      <h1>Popular Movies</h1>
      <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
            year={movie.year}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
