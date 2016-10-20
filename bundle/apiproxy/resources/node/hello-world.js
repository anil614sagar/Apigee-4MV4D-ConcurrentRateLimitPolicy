var http = require('http');

console.log('node.js application starting...');

var svr = http.createServer(function(req, resp) {
    setTimeout(function() {
     resp.end('Hello, World!');
    }, 20000);
});

svr.listen(9000, function() {
    console.log('Node HTTP server is listening');
});