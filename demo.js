var http = require('http'), fs = require ('fs');

var port = 4500;

http.createServer(handleRequest).listen(port);

var log = function(url, method, status){
	var d = new Date();
	console.log(d.toLocaleString() + " " + method + " " +  status + " " + url);
}

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
	req.url = req.url.toLowerCase();
	if (req.url === '/home' || req.url === '/' || req.url === '/home/' ) {
		serveStatic(res, './public/index.html', 'text/html', 200);
		log(req.url, req.method, 200);
	} 
	else if (req.url === '/about' || req.url === '/about/' ) {
		serveStatic(res, './public/about.html', 'text/html', 200);
		log(req.url, req.method, 200);

	}
	else if( req.url === '/me'){
		serveStatic(res, './public/301', 'text/html', 301);
		log(req.url, req.method, 301);

	} 
	else if (req.url === '/img/image1.png' || req.url === '/img/image1.png/') {
		serveStatic(res, './public/img/image1.png', 'image/png', 200);
		log(req.url, req.method, 200);

	}
	else if( req.url ==='/img/image2.png' || req.url === '/img/image2.png/'){
		serveStatic(res, './public/img/image2.png','image/png', 200);
		log(req.url, req.method, 200);

	} 
	else if( req.url === '/css/base.css' || req.url === '/css/base.css'){
		serveStatic( res, './public/css/base.css', 'text/css' , 200);
		log(req.url, req.method, 200);

	}
	else {
		serveStatic(res, './public/404.html', 'text/html', 404);
		log(req.url, req.method, 404);

	}
};
