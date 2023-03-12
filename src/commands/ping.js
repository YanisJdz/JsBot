const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Pong mais raciste')
        ,
    async execute(interaction) {
        await interaction.reply('Ping Pong ching chong -_-');
    },
};