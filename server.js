var http = require('http');
var date = require('./firstModule');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
 // res.write("Date now is" + date.myDateTime());
  res.write(req.url);
  res.end('Hello World!!!!');
}).listen(8080);