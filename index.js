'use strict';
const fs = require('fs');
const http = require('http');



const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/favicon.ico':
            res.writeHead(200, {
                'Content-Type': 'image/vnd.microsoft.icon'
            });
            const favicon = fs.readFileSync('./favicon.ico');
            res.end(favicon);
        break;
    }
}).on('error', (e) => {
    console.error('Server Error', e);
}).on('clientError', (e) => {
    console.error('Client Error', e);
});