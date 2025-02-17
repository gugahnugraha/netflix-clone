const TvShow = require('../models/TvShow');

const tvShowController = {
  getAllTvShows: async (req, res) => {
    try {
      const tvShows = await TvShow.find();
      res.json(tvShows);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getTvShowById: async (req, res) => {
    try {
      const tvShow = await TvShow.findById(req.params.id);
      if (!tvShow) {
        return res.status(404).json({ message: 'TV Show not found' });
      }
      res.json(tvShow);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getPopular: async (req, res) => {
    try {
      const shows = await TvShow.find().sort({ popularity: -1 }).limit(20);
      res.json(shows);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getTrending: async (req, res) => {
    try {
      const shows = await TvShow.find().sort({ createdAt: -1 }).limit(20);
      res.json(shows);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getTopRated: async (req, res) => {
    try {
      const shows = await TvShow.find().sort({ rating: -1 }).limit(20);
      res.json(shows);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = tvShowController;