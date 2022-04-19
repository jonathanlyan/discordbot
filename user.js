console.clear();
const {Client, Intents } = require('discord.js')
const mongoose = require('mongoose')
const config = require('./config.json')
const mongo = require('./mongo')
const command = require('./command')
const User = require('./schemas/UserSchema')



const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

//message event to store user data
client.on('message', async (message) => {
    const newUser = await User.create({
        username: message.author.username,
        content: message.content, 
        discordId: message.author.id
    });
    // const saveUser = await newUser.save();
})

//connection to the database
mongoose.connect(config.mongoPath,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then((m) =>{
    console.log("connected to database");
}).catch((err) => console.log (error));

client.on('ready', ()=>{
    console.log('bot is on')
});

//slash command
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
client.login(config.token)