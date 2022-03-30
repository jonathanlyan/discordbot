const { Client, Intents } = require('discord.js')
const config = require('./config.json')
const command = require('./command')
const mongo = require('./mongo')
// eslint-disable-next-line no-unused-vars
const messagecounter = require('./schemas/message-count-schema')

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});


client.on('ready', async()=> {
    console.log("the bot is ready")

        //connect to mongo
        await mongo().then((mongoose)=> {
            try{
                console.log('connected to mongodb')
            }finally{ //finally will always run
                mongoose.connection.close()
            }
        })

        //!test !hello
    command(client, ['test', 'hello'], (messageCreate) => {
        messageCreate.channel.send('hi')
    })

//!servers command
    command (client, 'servers', messageCreate => {
        client.guilds.cache.forEach((guild) => {
            //console.log(guild)
            //count how many members in the servers
            messageCreate.channel.send(
                `${guild.name} has a total of ${guild.memberCount} members`
            )
        })
    })

//clear channel whenver the user type !clearchannle in discord
//have to work on this still 
    command (client, ['cc', 'clear'], (messageCreate) => {
        if (messageCreate.member.hasPermission('ADMINISTRATOR')){
            messageCreate.channel.message.fecth().then((results) => {
                messageCreate.channel.bulkDelete(results)
            })
        }
    })


})
 
client.login(config.token)