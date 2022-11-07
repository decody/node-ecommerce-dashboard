const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// const globalRoutes = require('./routes/globalRoutes');
// const AppError = require('./utils/appError')
const app = express();

// allow corss-origin requests
app.use(cors());

// set security HTTP headers
app.use(helmet());

app.use(express.json({
    limit: '15kb'
}));

// handle undefined Routes
// app.use('*', (req, res, next) => {
//     const err = new AppError(404, 'fail', 'undefined route');
//     next(err, req, res, next);
// });

module.exports = app;