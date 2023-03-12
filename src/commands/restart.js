const { SlashCommandBuilder, EmbedBuilder, Client } = require('discord.js');
const { spawn } = require('child_process');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('restart')
        .setDescription('Redémarrer le JsBot'),
    async execute(interaction) {
        const restartEmbed = new EmbedBuilder()
            .setTitle('Redémarrage du JsBot')
            .setColor(0x0099FF)
            .setDescription('Le JsBot est en train de redémarrer ...')
        await interaction.reply({ embeds: [restartEmbed] });

        // Redémarrez le bot
        console.log('Déconnexion du bot...');
        await interaction.client.destroy();

        console.log('Bot déconnecté avec succès');
        console.log('Redémarrage du bot...');
        process.exit();
    }
};