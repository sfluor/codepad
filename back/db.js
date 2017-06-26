const redis = require('redis');
const bluebird = require('bluebird');

// Promisify everything with bluebird
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

// Creating redis client
const client = redis.createClient();

// Connecting to the Redis store
client.on('error', err => console.error('Error: ', err));

// Create new project
function newProject(docId) {
	// Creating docId: list length
	client.set(docId, 1, redis.print);

	// Creating docId:num : hash
	client.hmset(`${docId}:index:0`, {
		name: 'fileName',
		code: 'Start hacking !'
	});
}

// Update project
// Data is a list of dicts{name, code}
function updateProject(docId, data) {
	// Supressing previous hashes
	client.getAsync(docId).then(res => {
		// Mapping over every previous hash
		range(res).forEach(index => {
			client.del(`${docId}${index}`, redis.print);
		});
	});

	// Updating docId value
	client.set(docId, data.length, redis.print);

	// Updating every hash of the list
	data.forEach((hash, index) => {
		client.hmset(
			`${docId}:index:${index}`,
			{
				name: hash.name,
				code: hash.code
			},
			redis.print
		);
	});
}

// Get project, if it doesn't exist it creates a new one
function getProject(docId) {
	return client.getAsync(docId).then(res => {
		// If project already exists
		if (res !== null) {
			let data = [];
			// Retrieving every hash we store it in a promise
			range(parseInt(res)).forEach(index => {
				// Adding to data
				data.push(
					client.hgetallAsync(`${docId}:index:${index}`).then(obj => {
						return obj;
					})
				);
			});
			// Wait for promise to end and return our data
			return Promise.all(data);
		} else {
			// We create a new project
			newProject(docId);
			return [
				{
					name: 'fileName',
					code: 'Start hacking !'
				}
			];
		}
	});
}

// Simple range function, range(2) = [0, 1]
function range(int) {
	return [...Array(int).keys()];
}

module.exports = {
	updateProject,
	getProject
};
