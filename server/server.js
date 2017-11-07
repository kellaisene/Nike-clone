require('dotenv').config();
var express = require('express');
var massive = require('massive');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');

var app = module.exports = express();
var port = 8080;



app.use(cors());
app.use(session({
    resave: true,
    saveUnititialized: true,
    secret: 'asdlkfj;ljsdfl;kjasd;lksjdisncxocihve'
}))
app.use(express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json());

massive( connectionString ).then( db => {
    console.log('DB Connected');
    app.set('db', db)
}).catch(err=>console.log(err));