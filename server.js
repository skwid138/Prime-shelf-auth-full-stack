var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
require('dotenv').config();

var port = process.env.PORT;

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(port, function () {
    console.log('listening on satan\'s port-hole', port);
    
});