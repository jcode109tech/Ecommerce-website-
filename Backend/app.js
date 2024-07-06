const express = require('express');
const mongooseDBConnection = require('./config/db.config')
const routehandler = require('./routes');

const app = express();

mongooseDBConnection();

app.use(express.json())
app.use('/', routehandler );

// app.use('*', (req, res) => {
//     res.json('ROUTE NOT FOUND')
// })

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

module.exports = app;