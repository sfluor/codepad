const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

// Basic storage
let code = {
	'b94a1cfd-8e51-4719-a897-469b393d88e5': ''
};

// Handling connection
io.sockets.on('connection', socket => {
	// We conserve the id in this scope
	let Id = null;

	// Client sent the Id of the project
	socket.on('docId', ({ docId }) => {
		// If the project already exists we send him back the code
		if (code[docId]) socket.emit('docId', { code: code[docId] });
		else {
			// Else we create the project
			code[docId] = '';
			socket.emit('docId', { code: code[docId] });
		}

		// New value for docId
		Id = docId;
	});

	// New person
	socket.on('enter', () => {});

	// Person left the pad
	socket.on('left', () => {});

	// The text changed, we send the new version to everyone
	socket.on('code_change', payload => {
		code[Id] = payload.code;
		socket.broadcast.emit('code_change', { code: payload.code, Id });
	});
});

// Listening
server.listen(8080);
console.log('Listening...');
