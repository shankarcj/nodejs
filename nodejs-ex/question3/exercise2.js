
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
 fs.appendFile('exer.txt', 'uki is the best thing to live!', function (err) {
 if (err) throw err;
 console.log('Saved!');
})
}).listen(8000);
