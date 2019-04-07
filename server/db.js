var MongoClient = require('mongodb').MongoClient;
// import MongoClient from 'mongodb';

var url = "mongodb://localhost:27017/";

let mclient;
let conn;
/**
 * mongoexport --db mydb --collection customers --out  ..\export\mydb.json
 * mongoimport --db mydb --collection customers --file ..\export\mydb.json
 */
module.exports.getConnection = function getConnection() {
    return new Promise( (resolve, reject) => {
        if(conn) {
            return resolve(conn);
        } else {
            MongoClient.connect(url, function(err, client) {
                if (err){
                    console.error('Mongo connection error:', err);
                    reject(err);
                    process.exit(1);
                }
                mclient = client;
                var dbo = client.db("mydb");
                conn = dbo;
                return resolve(dbo);
            });
        }
    });
}

process.on('SIGINT', function() {
    console.log('application exiting...')
    if(mclient) {
        mclient.close(()=> {
            console.log('closed mongo connection')
            process.exit(0);
        });
    } else {
        process.exit(0);
    }
});