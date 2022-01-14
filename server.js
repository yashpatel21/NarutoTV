const express = require('express');
const localtunnel = require('localtunnel');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 3000;

app.use(express.static('src'));

app.post('/cycle', function () {
	io.emit('cycle');
});

io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

server.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);

	(async () => {
		const tunnel = await localtunnel({ port: 3000, subdomain: 'narutotv1337' });

		// the assigned public url for your tunnel
		// i.e. https://abcdefgjhij.localtunnel.me
		console.log(`created a new localtunnel at ${tunnel.url}`);

		tunnel.on('close', () => {
			// tunnels are closed
		});
	})();
});
