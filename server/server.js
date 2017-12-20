require('dotenv').config();
var express = require('express');
var massive = require('massive');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');

var app = module.exports = express();
var port = 8080;

const connectionString = process.env.CONNECTION_STRING;



app.use(cors());
app.use(session({
    resave: true,
    saveUnititialized: true,
    secret: 'asdlkfj;ljsdfl;kjasd;lksjdisncxocihve'
}))
app.use(express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json());

massive( "postgres://ynfevgay:xcuvbyYrWZhHToZFi0djXXCYDkDbH-FV@baasu.db.elephantsql.com:5432/ynfevgay" ).then( db => {
    console.log('DB Connected');
    app.set('db', db)
}).catch(err=>console.log(err));

app.listen( port, () => { console.log(`Server is listening on port ${port}`)})