var express = require('express');
var app = express();

var fs = require('fs');

app.set('view engine', 'ejs');

app.get('/', function(req, res) {		
	res.render('default', {
		title: 'Home',
		subtitle: 'Subtitle',
		text: 'This is the paragraph text'
	});
});

app.get('/about', function(req, res) {

		fs.readFile('about.json', 'utf-8', function(err, data) {
			if (err) {
			console.log("error occured");	
		
		} else {
			res.render('about', JSON.parse(data));
			console.log(data);	
		}});
		
	})

app.get('*', function(req, res) {	
	res.send('Bad Rout');
});	

var server = app.listen(3333, function() {
	console.log('Listening on port 3333');
});
