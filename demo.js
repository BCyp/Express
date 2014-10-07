var http = require('http'), fs = require ('fs');

var port = 3000;

http.createServer(handleRequest).listen(port);

console.log('Starting server on Port: ' + port);
function serveStatic(res, path, contentType, resCode) {
	fs.readFile(path, function(err, data) {
		if (err) {
			res.writeHead(500, { 'Content-Type': 'text/plain' }); 
			res.end('500 - Internal Error');
		} else {
			res.writeHead(resCode, { 'Content-Type': contentType }); 
			res.end(data);
		}
	});
};

function handleRequest(req, res) {
	if (req.url === '/home' || req.url === '/homepage') {
		serveStatic(res, './public/index.html', 'text/html', 200);
	} 
	else if (req.url === '/about') {
		serveStatic(res, './public/about.html', 'text/html', 200);
	}
	else if( req.url === '/me'){
		serveStatic(res, './public/301', 'text/html', 301);
	} 
	else if (req.url === '/img/image1.png') {
		serveStatic(res, './public/img/image1.png', 'image/png', 200);
	}
	else if( req.url ==='/img/image2.png'){
		serveStatic(res, '.public/img/image2.png','image/png', 200);
	} 
	else if( req.url === '/css/base.css'){
		serveStatic( res, '.public/css/base.css', 'text/css' , 200);
	}
	else {
		serveStatic(res, './public/404.html', 'text/html', 404);
	}
};
