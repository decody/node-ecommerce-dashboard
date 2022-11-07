const dotenv = require('dotenv');
dotenv.config({
    path: './config.env'
});

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION!!! shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

const app = require('./app');


// connect the database



// start the server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});

app.get('/', (req, res, next) => {
    res.json({"message":"Ok"})
});

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION!!!  shutting down ...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
