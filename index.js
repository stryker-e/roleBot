// Require necessary discord.js classes
const fs = require('node:fs');
const path = require('node:path');
const { Client, Intents, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create new client instance
// const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

// When client is ready, run code only once
/*client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    } else if (commandName === 'beep') {
        await interaction.reply('Boop!');
    }
});*/

// Login to Discord with client's token
client.login(token);