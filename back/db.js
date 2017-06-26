const redis = require('redis'),
	client = redis.createClient();

// Connecting to the Redis store
client.on('error', (err) => console.error("Error: ", err));

module.exports = {
	client
}