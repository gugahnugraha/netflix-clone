import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../services/api';

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieById(id);
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <div className="movie-backdrop" style={{ backgroundImage: `url(${movie.backdrop})` }}>
        <div className="movie-detail-content">
          <h1>{movie.title}</h1>
          <div className="movie-meta">
            <span>{movie.year}</span>
            <span>{movie.runtime} min</span>
            <span>{movie.rating}</span>
          </div>
          <p className="movie-overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
