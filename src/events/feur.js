const { Events } = require('discord.js');

const feurs = [
    "feur",
    "quoicoubeh",
    "quoicoubakaaaa",
    "bah feur mon reuf ptdr",
    "chi",
    "apagnannn",
    "quoicouBINKKSSSSSS"
];

module.exports = {
    name: Events.MessageCreate,
    async execute(message){
        if (message.content.toLowerCase().includes("quoi") && !message.author.bot) {
            message.reply(feurs[Math.floor(Math.random() * feurs.length)])
                .then(() => console.log(`Replied to message "${message.content}"`))
                .catch(console.error);        }
    },
}