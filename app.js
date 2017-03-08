var express = require('express');
var exphbs = require('express-handlebars');
var myConnection = require('express-myconnection');
var bodyParser = require('body-parser');
var events = require('events');
var mysql = require('mysql');
var events = require('./routes/events');
// var countdown = require('./public/js/countdown');

var app = express();

var dbOptions = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  port: 3306,
  database: 'kick_off'
};

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));
app.use(myConnection(mysql, dbOptions, 'single'));

function errorHandler(err, req, res, next){
   res.status(500);
   res.render('error', {error: err});
 }

// app.get('/', countdown.count);
app.get('/', events.show);
app.get('/add_event/add', events.showAdd);
app.post('/add_event/add', events.add);

 app.use(errorHandler);

 var port = process.env.CRUD_PORT_NR || 3007;
 app.listen(port, function(){
   console.log('Server listening on http://localhost:' + port);
 });
