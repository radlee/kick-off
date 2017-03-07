var express = require('express');
var exphbs = require('express-handlebars');
var myConnection = require('express-myconnection');
var bodyParser = require('body-parser');
var events = require('events');
var mysql = require('mysql');
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
//Basic Routing


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + 'public'));
app.use(myConnection(mysql, dbOptions, 'single'));

function errorHandler(err, req, res, next){
   res.status(500);
   res.render('error', {error: err});
 }

app.get('/', function(re, res, next){
    res.render('home');
});

app.get('/add_event/add', events.showAdd);
app.post('/add_event/add', events.add);

 app.use(errorHandler);

 var port = process.env.CRUD_PORT_NR || 5000;
 app.listen(port, function(){
   console.log('Server listening on http://localhost:' + port);
 });
