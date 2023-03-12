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
            if (message.content.toLowerCase().includes("zak") && message.content.toLowerCase().includes("?") && message.author.id == 260079309434257413) {
                message.reply("Il mange, il dort, il est un pig :pig:")
                    .then(() => console.log(`Zak le pig: "${message.content}"`))
                    .catch(console.error);
                }else{
                    message.reply(feurs[Math.floor(Math.random() * feurs.length)])
                    .then(() => console.log(`Réponse feur: "${message.content}"`))
                    .catch(console.error);
                }
            }
    },
}