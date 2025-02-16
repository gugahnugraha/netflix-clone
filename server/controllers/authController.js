// server/controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authController = {
  register: async (req, res) => {
    try {
      const { email, password, username } = req.body;

      // Check if user already exists
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create user
      const user = new User({
        email,
        password: hashedPassword,
        username
      });

      await user.save();

      // Create token
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '30d' }
      );

      res.status(201).json({
        token,
        user: {
          id: user._id,
          email: user.email,
          username: user.username,
          role: user.role
        }
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Find user
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Create token
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '30d' }
      );

      res.json({
        token,
        user: {
          id: user._id,
          email: user.email,
          username: user.username,
          role: user.role
        }
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  logout: async (req, res) => {
    try {
      res.json({ message: 'Logged out successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getProfile: async (req, res) => {
    try {
      const user = await User.findById(req.user._id)
        .select('-password')
        .populate('myList.movies')
        .populate('myList.tvShows');
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  addToMyList: async (req, res) => {
    try {
      const { itemId, type } = req.body;
      const listField = type === 'movie' ? 'myList.movies' : 'myList.tvShows';

      const user = await User.findByIdAndUpdate(
        req.user._id,
        { $addToSet: { [listField]: itemId } },
        { new: true }
      )
        .select('-password')
        .populate('myList.movies')
        .populate('myList.tvShows');

      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  removeFromMyList: async (req, res) => {
    try {
      const { itemId, type } = req.body;
      const listField = type === 'movie' ? 'myList.movies' : 'myList.tvShows';

      const user = await User.findByIdAndUpdate(
        req.user._id,
        { $pull: { [listField]: itemId } },
        { new: true }
      )
        .select('-password')
        .populate('myList.movies')
        .populate('myList.tvShows');

      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = authController;