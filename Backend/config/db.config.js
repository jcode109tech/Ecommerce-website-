const mongoose = require('mongoose');
require('dotenv').config();  // Ensure you have dotenv configured to load environment variables

const mongooseDBConnection = async () => {
  try {
    const uri = process.env.MONGO_URI;  // Retrieve the URI from environment variables
    if (!uri) {
      throw Error('MongoDB URI is not defined in environment variables');
    }
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Connection Error', error);
    throw Error('Connection Error');
  }
};

module.exports = mongooseDBConnection;
