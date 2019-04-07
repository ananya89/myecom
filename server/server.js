var express =require('express');
var path = require('path');
let getConnection = require('./db').getConnection;

var app = express();

// import getConnection from './db';

function getFromDB(callbackFn){
    getConnection().then(function(db) {
        var query = { address: "Park Lane 38" };
        db.collection("customers").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            callbackFn(result);
        });
    });
}

app.use(express.static(path.join(__dirname, '../'))); // Current directory is root
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', require('./controller/login'));
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