// Create web server
// Run the server
// Open the browser
// Go to http://localhost:3000/

var http = require('http');
var fs = require('fs');

// Create server
http.createServer(function (req, res) {
  // Read file
  fs.readFile('comments.html', function(err, data) {
    // Check for errors
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end('404 Not Found');
    }  
    // Write data
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(3000);

// Run the server
console.log('Server running at http://localhost:3000/');

// Open the browser
// Go to http://localhost:3000/