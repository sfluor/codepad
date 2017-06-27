const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

const db = require('./db');

// Handling connection
io.sockets.on('connection', socket => {
	// We conserve the id in this scope
	let Id = null;

	// Client sent the Id of the project
	socket.on('docId', ({ docId }) => {
		// Retrieve data from Redis store
		db.getProject(docId).then({ title, codes } => {
			// Send data to the user
			socket.emit('docId', { title, codes });
		});

		// New value for docId
		Id = docId;
	});

	// The title changed, we send the new version to everyone
	socket.on('title_change', { title }) => {
		// Updating our store with the new title
		db.updateTitle(Id, title);
		socket.broadcast.emit('title_change', { title });
	}


	// The text changed, we send the new version to everyone
	socket.on('code_change', payload => {
		// Updating our store with the new code
		db.updateProject(Id, payload);
		socket.broadcast.emit('code_change', { payload, Id });
	});
});

// Listening
server.listen(8080);
console.log('Listening...');
