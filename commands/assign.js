const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('assign')
        .setDescription('Assigns game interest roles to members.'),
    async execute(interaction) {
        await interaction.reply('Fuck off');
    },
};