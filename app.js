

const express = require('express');
const rateLimit = require('express-rate-limit');
const http = require('http');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const { addColors } = require('winston/lib/winston/config');


const userRouter = require('./routes/userRouter');
const app = express();
const server = http.createServer(app);

// allow corss-origin requests
app.use(cors());

// set security HTTP headers
app.use(helmet());

// limit request from the same API
const limiter = rateLimit({
    max: 150,
    windowMs: 60 * 60 * 1000,
    message: 'Too many request from this IP, please try again in an hours'
});
app.use('/api', limiter);

// body parser, reading data from body into req.body
app.use(express.json({
    limit: '15kb'
}));


// data sanitization against XSS(clean user input from malicious HTML code)
app.use(xss());

// prevent parameter pollution
app.use(hpp());

// router
app.use('/api/users', userRouter);



// handle undefined Routes
// app.use('*', (req, res, next) => {
//     const err = new AppError(404, 'fail', 'undefined route');
//     next(err, req, res, next);
// });


module.exports = app;