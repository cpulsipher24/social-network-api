// utils/seed.js
const mongoose = require('mongoose');
const { User, Thought, Reaction } = require('../models');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Sample data to seed
const userData = [
  { username: 'user1', email: 'user1@example.com' },
  { username: 'user2', email: 'user2@example.com' },
  // Add more users as needed
];

const thoughtData = [
  { thoughtText: 'This is a thought by user1', username: 'user1' },
  { thoughtText: 'This is a thought by user2', username: 'user2' },
  // Add more thoughts as needed
];

// Seed function to insert data
const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany();
    await Thought.deleteMany();
    await Reaction.deleteMany();

    // Insert users
    const users = await User.insertMany(userData);

    // Insert thoughts
    const thoughts = await Thought.insertMany(thoughtData);

    // Associate thoughts with users
    await User.updateMany({}, { $push: { thoughts: { $each: thoughts.map(thought => thought._id) } } });

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection
    mongoose.disconnect();
  }
};

// Call the seed function
seedDatabase();
