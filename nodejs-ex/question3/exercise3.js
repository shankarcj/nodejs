
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
fs.rename('exer.txt', 'texer.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
})
}).listen(8000);
