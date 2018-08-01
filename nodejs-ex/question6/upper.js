var http = require('http');
var uppercase = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  /*Use our upper-case module to upper case a string:*/
  res.write(uppercase("Uki is the best place to learn programming !"));
  res.end();
}).listen(8080);
