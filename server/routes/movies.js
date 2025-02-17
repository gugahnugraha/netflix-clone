// server/routes/movies.js
const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const { auth, isAdmin } = require('../middleware/auth');

// Public routes
router.get('/', movieController.getMovies);
router.get('/:id', movieController.getMovie);
router.get('/popular', movieController.getPopular);
router.get('/trending', movieController.getTrending);
router.get('/top-rated', movieController.getTopRated);

// Protected routes (Admin only)
router.post('/', [auth, isAdmin], movieController.addMovie);
router.put('/:id', [auth, isAdmin], movieController.updateMovie);
router.delete('/:id', [auth, isAdmin], movieController.deleteMovie);

module.exports = router;