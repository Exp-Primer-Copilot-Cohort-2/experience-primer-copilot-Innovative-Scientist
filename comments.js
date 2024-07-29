// Create web server
// Create a web server that listens on port 3000 and serves comments.js file using fs module. 
// Use the fs module and readFile method to read the file and send it to the client. 
// Use the createServer method of the http module to create a server and listen on port 3000.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./comments.js', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
    });
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});