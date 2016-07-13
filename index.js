var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 80));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

app.use(function(request, response, next) {
	// response.render('pages/index');
	response.redirect(301, 'http://cnpolitics.github.io/radio' + request.originalUrl);
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});
