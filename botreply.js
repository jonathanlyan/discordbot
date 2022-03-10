console.clear() //it will clear the console whenever the code runs
require('dotenv').config() //connect the dotevn file

const {Client, Intents} = require('discord.js');

// const guildId = "896536018495344662"

const client = new Client({ 
    intents: [ Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
]
});

// const getApp = (guildId) => {
//     const app = client.api.application(client.user.id)
//     if(guildId){
//         app.guilds(guildId)

// return app    }
// }

// //turn on the bot
// client.on("ready", async()=> {
//     console.log("bot is on")

//     const commands = await getApp(guildId).commands.get()
//     console.log(commands)
//     await getApp(guildId).commands.post({
//         data: {
//         name: 'ping',
//         description: 'Sample ping pong command',
//         },
//     })

// })

//let the bot message you
client.on("messageCreate", message => {
    if (message.content == "hi") {
        message.reply({
            content: 'hey'
        })
    }
})



//turn on the bot and access fro the env file
client.login(process.env.token)