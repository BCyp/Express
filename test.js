var express = require('express');

var app = express();
var port = 3000;
var path =require("path");
var publicPath = path.resolve(__dirname, "views");

var handlebars = require('express3-handlebars').create({defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(publicPath));
app.listen(port);
console.log('Server started on port: ' + port);

app.get('/', function(req, res){
        res.render('index');
});

