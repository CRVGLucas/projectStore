const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
var products = require('./productsStore');

db.serialize(function() {
    db.run("CREATE TABLE products VALUES")
    var stmt = db.prepare('INSERT INTO products VALUES (?)');
    for(var i = 0; i <= products.length; i++){
        stmt.run(products[i]);
    }
    stmt.finalize();
    db.each("SELECT * FROM products", function(row) {
        console.log(row.id);
    });
});

db.close();


const app = express();
let port = process.env.PORT || 4000;

const server = app.listen(function () {
    console.log('Listening on port ' + port);
});
