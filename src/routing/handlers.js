const express = require("express");
const router = express.Router();
// const connection = require('../../config/connection');
const orm = require('../../config/orm');

//THIS COULD BE TOTALLY WRONG, But I only use one of the CRUD methods from this end

router.get('/all', (req, res) => {
    connection.query('select * from inches', function (error, results){
        if (error) console.log(error); 
        res.send(JSON.stringify(results));
    });
        
    })
    


module.exports = router;