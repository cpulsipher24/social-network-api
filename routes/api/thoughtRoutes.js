// routes/api/thoughtRoutes.js
const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController');

// Route for getting all thoughts
router.get('/thoughts', getAllThoughts);

// Route for getting a single thought by ID
router.get('/thoughts/:thoughtId', getThoughtById);

// Route for creating a new thought
router.post('/thoughts', createThought);

// Route for updating a thought by ID
router.put('/thoughts/:thoughtId', updateThought);

// Route for deleting a thought by ID
router.delete('/thoughts/:thoughtId', deleteThought);

// Route for adding a reaction to a thought
router.post('/thoughts/:thoughtId/reactions', addReaction);

// Route for removing a reaction from a thought
router.delete('/thoughts/:thoughtId/reactions/:reactionId', removeReaction);

module.exports = router;
