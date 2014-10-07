var express = require('express'),
    exphbs  = require('express3-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('index', {h1 : "Browser Test Page"});
});
app.get('/about', function (req, res) {
    res.render('about', {h1 : "About"});
});
app.get('/404', function (req, res) {
    res.render('404', {h1 : "404"});
});

app.use('/public', express.static('public'));
console.log ("Starting sever : 3000");
app.listen(3000);
