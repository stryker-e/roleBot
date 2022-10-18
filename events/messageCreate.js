const { RequestManager } = require("discord.js");

module.exports = (client, message) => {
    //ignore all bots
    if (message.author.bot) return;
    //ignore messages not starting with prefix in config.json
    if (message.content.indexOf(client.config.prefix) !== 0) return;
    
}