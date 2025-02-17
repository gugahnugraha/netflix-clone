const tvShowsController = {
  getAllTvShows: async (req, res) => {
    try {
      // Implement TV shows fetching logic here
      res.json({ message: "Get all TV shows" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getTvShowById: async (req, res) => {
    try {
      const { id } = req.params;
      // Implement single TV show fetching logic here
      res.json({ message: `Get TV show with id: ${id}` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = tvShowsController;
