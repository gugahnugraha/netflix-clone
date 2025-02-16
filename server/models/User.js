// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  myList: {
    movies: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie'
    }],
    tvShows: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'TvShow'
    }]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);