// server/routes/tvShows.js
const express = require('express');
const router = express.Router();
const tvShowController = require('../controllers/tvShowController');
const { auth, isAdmin } = require('../middleware/auth');

// Public routes
router.get('/', tvShowController.getTvShows);
router.get('/:id', tvShowController.getTvShow);

// Protected routes (Admin only)
router.post('/', [auth, isAdmin], tvShowController.addTvShow);
router.put('/:id', [auth, isAdmin], tvShowController.updateTvShow);
router.delete('/:id', [auth, isAdmin], tvShowController.deleteTvShow);

module.exports = router;