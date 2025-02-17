// server/routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth').auth;

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', auth, authController.logout);
router.get('/me', auth, authController.getProfile);
router.put('/mylist/add', auth, authController.addToMyList);
router.put('/mylist/remove', auth, authController.removeFromMyList);

module.exports = router;