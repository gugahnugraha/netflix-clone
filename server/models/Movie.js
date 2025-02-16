// server/models/Movie.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  tmdbId: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  overview: {
    type: String,
    required: true
  },
  posterPath: String,
  backdropPath: String,
  releaseDate: Date,
  genres: [{
    type: String
  }],
  runtime: Number,
  voteAverage: Number,
  streamUrl: String,
  cast: [{
    tmdbId: Number,
    name: String,
    character: String,
    profilePath: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Movie', movieSchema);