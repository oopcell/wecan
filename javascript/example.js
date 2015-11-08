
// To run the server execute it with the node program
// node example.js 

var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');

// To create a local database, you simply call new PouchDB and give it a name:

var db = new PouchDB('sample');
db.info().then(function (info) {
  document.getElementById('display').innerHTML = 'We have a database: ' + JSON.stringify(info);
});

