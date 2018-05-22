// const http = require('http');
//
// const app = require('./app');
//
// const port = process.env.PORT || 8081;
//
// const server = http.createServer(app);
//
// server.listen(port);







////////////////




const http = require('http');

const port = process.env.PORT || 8081;

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
});

server.listen(port);