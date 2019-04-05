var express =require('express');

var app = express();

var path = require('path');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function getFromDB(callbackFn){
    MongoClient.connect(url, function(err, db) {
        if (err){ 
            console.error(err);
            throw err;
        }
        var dbo = db.db("mydb");
        var query = { address: "Park Lane 38" };
        dbo.collection("customers").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            callbackFn(result);
            db.close();
        });
    });
}

app.use(express.static(path.join(__dirname, '../'))); // Current directory is root
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/show', function (req, res, next){
    console.log('req', req.query);

    getFromDB(function(data){
        res.send('Hello mongo'+ JSON.stringify(data));
        next();
    });
});
app.post('/insertaddress', function (req, res, next){
    
})
app.listen(3000, () => {
    console.log('Listening on port 3000');
});