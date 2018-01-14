var http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200, {'Content':'text/plain'});
	response.end('Hello Tongheshang\n');
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');