import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [trendingTVShows, setTrendingTVShows] = useState([]);

  // Add API calls to fetch data from TMDB here

  return (
    <div className="bg-black min-h-screen">
      <Banner movies={trendingMovies} />
      
      <div className="px-8 py-6">
        <section className="mb-8">
          <h2 className="text-white text-2xl font-bold mb-4">Popular Movies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {popularMovies.map(movie => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-white text-2xl font-bold mb-4">Top Rated Movies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {topRatedMovies.map(movie => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-white text-2xl font-bold mb-4">Trending TV Shows</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {trendingTVShows.map(show => (
              <MovieCard key={show.id} {...show} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
