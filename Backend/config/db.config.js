const mongoose = require('mongoose');
const configVariables = require('./config');

const mongooseDBConnection =  () => {
    mongoose
    .connect (configVariables.MONGO_URL)
    .then ( () => {
        console.log("Successfully connected to the MongoDB database.");
    })
    .catch ( (err) => {
        console.error(err);
        throw new Error('Connection Error')
    })
};

module.exports = mongooseDBConnection;

