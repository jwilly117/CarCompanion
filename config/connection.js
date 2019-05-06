const mysql = require('mysql');

let connection

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Pringles117',
        database: 'distance_db'
    });
};



connection.connect(function(err){
    if (err) throw err;
    console.log("Connection To Database Successful");
});

module.exports = connection;