const express = require('express');
const mongooseDBConnection = require('./config/db.config')
const configVariables = require('./config/config')
const cloudinary = require('cloudinary')
const routehandler = require('./routes');

const cors = require('cors');

const app = express();

cloudinary.config({
    cloud_name: configVariables.CLOUNDINARY_NAME,
    api_key: configVariables.CLOUDINARY_PUBLIC,
    api_secret: configVariables.CLOUDINARY_SECRET
});


mongooseDBConnection();

app.use(cors());
app.use(express.json())
app.use('/', routehandler );

// app.use('*', (req, res) => {
//     res.json('ROUTE NOT FOUND')
// })

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

module.exports = app;
