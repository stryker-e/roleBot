/* eslint-disable brace-style */
// TODO - command for me only that prints bills scores

// Require necessary discord.js classes
const { Client, Intents, Collection, GatewayIntentBits } = require("discord.js");
const fs = require('fs');

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const { config } = require('./config.json');
// attach the config to CLIENT so it's available everywhere
client.config = config;
ClientUser.commands = new Collection();

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of events) {
	const eventName = file.split('.')[0];
	const event = require(`./events/${file}`);
	client.on(eventName, event.bind(null, client));
}

const commands = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commands) {
	const commandName = file.split('.')[0];
	const command = require(`./commands/${file}`);
	
	console.log(`Attempting to load command ${commandName}`);
	client.commands.set(commandName, command);
}

// Login to Discord with client's token
client.login(config.token);