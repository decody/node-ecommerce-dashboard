const sqlite3 = require('sqlite3').verbose();


const dotenv = require('dotenv');
dotenv.config({
    path: './config.env'
});

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION!!! shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

// connect the database
const db = new sqlite3.Database('./database/employee.db');
db.run('CREATE TABLE IF NOT EXISTS emp(id TEXT, name TEXT)');

const app = require('./app');

// start the server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});

app.get('/', (req, res, next) => {
    res.json({"message":"Ok"})
});

// create
app.get('/add/:id/:name', (req, res) => {
    db.serialize(() => {
        db.run('INSERT INTO emp(id,name) VALUES(?,?)', [req.params.id, req.params.name], (err) => {
            if (err) {
                return console.log(err.message);
            }
            console.log('New employee has been added');
            res.send("New employee has been added into the database with ID = " + req.params.id + " and Name = " + req.params.name);
        });
    });
});

// read
app.get('/view/:id', (req, res) => {
    db.serialize(() => {
        db.each('SELECT id ID, name NAME FROM emp WHERE id =?', [req.params.id], (err, row) => {     //db.each() is only one which is funtioning while reading data from the DB
            if (err) {
                res.send("Error encountered while dislaying");
                return console.error(err.message);
            }
            res.send(` ID: ${row.ID},    Name: ${row.NAME}`);
            console.log("Entry dislayed successfully");
        });
    });
});

// update
app.get('/update/:id/:name', (req, res) => {
    db.serialize(() => {
        db.run('UPDATE emp SET name = ? WHERE id = ?', [req.params.name,req.params.id], (err) => {
            if (err){
                res.send("Error encountered while updating");
                return console.error(err.message);
            }
            res.send("Entry updated successfully");
            console.log("Entry updated successfully");
        });
    });
});
  

// delete
app.get('/del/:id', (req,res) => {
    db.serialize(() => {
        db.run('DELETE FROM emp WHERE id = ?', req.params.id, (err) => {
            if (err) {
                res.send("Error encountered while deleting");
                return console.error(err.message);
            }
            res.send('Entry deleted');
            console.log('Entry deleted');
        });
    });
});

// closing the database connection
app.get('/close', (req, res) => {
    db.close((err) => {
        if (err) {
            res.send('There is some error in closing the database');
            return console.error(err.message);
        }
        console.log('Closing the database connection.');
        res.send('Database connection successfully closed');
    });
});


process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION!!!  shutting down ...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
