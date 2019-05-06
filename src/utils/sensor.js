// Here We set up everything we will need to get the inch data
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

// Once the connection is successful, we simply want to make a query

// let orm = {
//     selectAll: function(cb) {
//         connection.query("SELECT * FROM inches", function (err, data) {
//             if (err) cb(err, null);
//             cb(null, data);
//             // console.log(data);
//             let string = JSON.stringify(data)
//             // console.log("String: " , string)
//             json1 = string;
//             // console.log("hdfsfdjl" , json1)
//             return json1;
//         })
//     }

// }

export default {
    selectAll: function(cb) {
        connection.query("SELECT * FROM inches", function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
            // console.log(data);
            let string = JSON.stringify(data)
            // console.log("String: " , string)
            let json1 = string;
            // console.log("hdfsfdjl" , json1)
            return json1;
        })
    }
}

//  orm.selectAll(function(error, results){
//     if (error) {
//         return "Not Able to retrieve data"
//     }
//     console.log(results);
//     return results;
    

//     // console.log("Results: " , results);
//     // let string = JSON.stringify(results);
//     // console.log("String: " , string)
//     // let json =  JSON.parse(string);
//     // console.log("JSON: " , json);
//     // console.log(json[0].id);

//     // //HERES HOW TO GET THE DIFFERENT INCHES
//     // console.log(json[0].inches);
//     // console.log(json[0].inches2);

// })
// console.log("JSON!" , json1);
// let oj;

// function returning(os){
//     console.log(os);
//     let oj = os;
//     return oj;
// };


// if (oj) console.log(oj);
// console.log(packet);

// export default orm;