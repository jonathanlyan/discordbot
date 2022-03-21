const {Client, Intents} = require('discord.js');
const config = require('./config.json');


const client = new Client({
    intents: [ Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES]
});

//turn on the bot
client.on("ready", ()=> {
    console.log("bot is on")
})


client.login(config.token)