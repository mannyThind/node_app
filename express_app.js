
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();
app.get('/', function(req, res){
   res.render('form');
});
app.set('view engine', 'pug');
app.set('views', './views');
//app.set('views', 'views');
//app.set('view engine', 'ejs');
// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/', function(req, res){
   console.log(req.body);
   var sum = parseFloat(req.body.first) + parseFloat(req.body.second);
   var result = JSON.stringify(sum)
   res.send(result);
});
app.listen(8080);
