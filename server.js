const http = require('http');

const hostname = '0.0.0.0';
const port = 8080;

function logRequest(req) {
    const { method, url } = req;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${method} ${url}`);
}

const server = http.createServer((req, res) => {
    logRequest(req);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})