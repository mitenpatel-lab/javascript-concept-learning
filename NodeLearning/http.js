import http from 'http';
import fs from 'fs-extra';
import url from 'url';

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    const parsedUrl = url.parse(req.url, true);


    if (parsedUrl.pathname === '/submit' && req.method == 'GET') {
        const name = parsedUrl.query.name;

        if (!name) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            return res.end('Name not provided.');
        }

        const filePath = `./${name}.txt`;

        try {
            const exists = await fs.pathExists(filePath);

            if (exists) {
                console.log("File already exists");
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(`Hello, ${name}! A file with your name already exists.`);
            } else {
                await fs.writeFile(filePath, `This file belongs to ${name}`);
                console.log("File created and written successfully");
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(`Hello, ${name}! Your file has been created.`);
            }
        } catch (err) {
            console.error("Error:", err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        }

    } else if (parsedUrl.pathname === '/about') {
        res.end('About Page');
    }
    else if (parsedUrl.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const html = await fs.readFile('./index.html', 'utf-8');
        res.end(html);
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(3000, () => console.log('Server running on port 3000'));
