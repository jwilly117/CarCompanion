
// const connection = require('./connection');

// IMPORTANT TO NOTE: I ONLY USE orm.selectAll() on the web side, the rest is handled by a node server on the 
// Radio Unit itself


const orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM inches", function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
        })
    },

    selectAllBy: function(condition, value, cb) {
        const sqlQuery = `SELECT * FROM inches WHERE ${condition} = ${value}`;
        connection.query(sqlQuery, function( err, data) {
            if (err) cb (err, null);
            cb(null, data)
        })
    },

    insertOne: function(values, cb){
        const sqlQuery = `INSERT INTO inches() VALUES('${values}')`;
        connection.query(sqlQuery, function(err, data){
            if(err) cb(err, null);
            cb(null, data);
        });
    },

    deleteOne: function(id, cb) {
        const sqlQuery = `DELETE FROM inches WHERE id = ${id}`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb (err, null)
            cb ( null, data)
        });
    },

    updateOne: function (condition, id, cb){ 
        const sqlQuery = `UPDATE inches SET inches = ${condition} WHERE id = ${id}`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb (err, null)
            cb ( null, data)
        });

    }
};


orm.selectAll(function(error, inches){
    if (error) {
        return resizeBy.status(501).json({
            message: "Not able to query the database"
        });
    }

    console.log("Inches: " , inches);
    
})

module.exports = orm;