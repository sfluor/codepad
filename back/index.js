const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

// Basic storage
let code = '';

// Handling connection
io.sockets.on('connection', (socket) => {

	// We send the state of the pad at first connection
	socket.emit('change', { code });


	// New person
	socket.on('enter', () => {
	});

	// Person left the pad
	socket.on('left', () => {
	})

	// The text changed, we send the new version to everyone
	socket.on('change', (payload) => {
		code = payload.code;
		socket.broadcast.emit('change', payload);
	});
});

// Listening
server.listen(8080)
console.log('Listening...')