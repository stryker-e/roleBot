// Require necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When client is ready, run code only once
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with client's token
client.login(token);

