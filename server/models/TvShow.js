// server/models/TvShow.js
const mongoose = require('mongoose');

const tvShowSchema = new mongoose.Schema({
  tmdbId: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  overview: {
    type: String,
    required: true
  },
  posterPath: String,
  backdropPath: String,
  firstAirDate: Date,
  genres: [{
    type: String
  }],
  numberOfSeasons: Number,
  voteAverage: Number,
  episodes: [{
    seasonNumber: Number,
    episodeNumber: Number,
    name: String,
    overview: String,
    streamUrl: String,
    stillPath: String,
    airDate: Date
  }],
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

module.exports = mongoose.model('TvShow', tvShowSchema);