const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const name = parsedUrl.pathname.split('/')[2]; // Extracting the name from the URL

    if (req.method === 'GET' && parsedUrl.pathname.startsWith('/hello/')) {
        // Handle GET request
        if (name) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Hello, ${name}.`);
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Name parameter is missing.');
        }
    } else if (req.method === 'GET' && req.url === '/') {
        // Serve the index.html file
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        // Handle 404
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
``
