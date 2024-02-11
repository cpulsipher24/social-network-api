// routes/api/userRoutes.js
const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// Route for getting all users
router.get('/users', getAllUsers);

// Route for getting a single user by ID
router.get('/users/:userId', getUserById);

// Route for creating a new user
router.post('/users', createUser);

// Route for updating a user by ID
router.put('/users/:userId', updateUser);

// Route for deleting a user by ID
router.delete('/users/:userId', deleteUser);

// Route for adding a friend to a user's friend list
router.post('/users/:userId/friends/:friendId', addFriend);

// Route for removing a friend from a user's friend list
router.delete('/users/:userId/friends/:friendId', removeFriend);

module.exports = router;
