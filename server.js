var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 80
server.listen(80);

// Put a mean message to the terminal
console.log("Never listen to port 81");
console.log("Listening on port 80");
