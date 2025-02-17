const mongoose = require('mongoose');

const tvShowSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  releaseYear: Number,
  genre: [String],
  posterPath: String,
  backdropPath: String,
  voteAverage: Number,
  numberOfSeasons: Number,
  numberOfEpisodes: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('TvShow', tvShowSchema);