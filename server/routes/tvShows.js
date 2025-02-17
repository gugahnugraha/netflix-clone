const express = require('express');
const router = express.Router();
const tvShowController = require('../controllers/tvShowController');
const tvShowsController = require('../controllers/tvShowsController');
const { auth } = require('../middleware/auth');

router.get('/', auth, tvShowsController.getAllTvShows);
router.get('/:id', auth, tvShowsController.getTvShowById);
router.get('/popular', tvShowController.getPopular);
router.get('/trending', tvShowController.getTrending);
router.get('/top-rated', tvShowController.getTopRated);

module.exports = router;