
const http = require('http');

const hostname = 'localhost'; 
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Log the request method and URL
    console.log(`${req.method} request for '${req.url}'`);

    // Set the response header
    res.setHeader('Content-Type', 'application/json');

    // Handle different routes
    if (req.url === '/') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'Welcome to the Home Page!' }));
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'About Us' }));
    } else if (req.url === '/contact') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'Contact Us' }));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Page not found' }));
    }
});

// Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
