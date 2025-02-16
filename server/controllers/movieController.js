// server/controllers/movieController.js
const Movie = require('../models/Movie');
const axios = require('axios');

const movieController = {
  // Get all movies
  getMovies: async (req, res) => {
    try {
      const movies = await Movie.find()
        .sort({ createdAt: -1 });
      res.json(movies);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get single movie
  getMovie: async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id);
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
      }
      res.json(movie);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Add movie from TMDB
  addMovie: async (req, res) => {
    try {
      const { tmdbId } = req.body;
      
      // Check if movie already exists
      const existingMovie = await Movie.findOne({ tmdbId });
      if (existingMovie) {
        return res.status(400).json({ message: 'Movie already exists' });
      }

      // Fetch movie data from TMDB
      const tmdbResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${process.env.TMDB_API_KEY}&append_to_response=credits`
      );

      const movieData = {
        tmdbId: tmdbResponse.data.id,
        title: tmdbResponse.data.title,
        overview: tmdbResponse.data.overview,
        posterPath: tmdbResponse.data.poster_path,
        backdropPath: tmdbResponse.data.backdrop_path,
        releaseDate: tmdbResponse.data.release_date,
        genres: tmdbResponse.data.genres.map(genre => genre.name),
        runtime: tmdbResponse.data.runtime,
        voteAverage: tmdbResponse.data.vote_average,
        cast: tmdbResponse.data.credits.cast.slice(0, 10).map(actor => ({
          tmdbId: actor.id,
          name: actor.name,
          character: actor.character,
          profilePath: actor.profile_path
        }))
      };

      const movie = new Movie(movieData);
      await movie.save();

      res.status(201).json(movie);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update movie
  updateMovie: async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id);
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
      }

      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        { ...req.body, updatedAt: Date.now() },
        { new: true }
      );

      res.json(updatedMovie);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Delete movie
  deleteMovie: async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id);
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
      }

      await movie.remove();
      res.json({ message: 'Movie removed' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = movieController;