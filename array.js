const {Client, Intents} = require('discord.js')
require('dotenv').config()

const client = new Client({
    intents: [ Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES]
});

//turn on the bot
client.on("ready", ()=> {
    console.log("bot is on")
})



client.login(process.env.token)