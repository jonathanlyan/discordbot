const mongo = require('./mongo')
const command = require('./command')
const welcomeSchema = require('./schemas/welcome-schema')
const { Guild } = require('discord.js')

//export module
module.exports = (client) => {

    command (client, 'setwelcome', async (message) => {
        const {member, channel, content } = message

        if (!member.hasPermission('ADMINISTRATOR')){
            channel.send('You dont have permission to run this commnad')
            return
        }
        //connection to the database using the code below
        await mongo().then(async (mongoose) => {
            try{
                new welcomeSchema({
                    _id: guild.Id,
                    channelId: channel.id,
                    text: content,          
                }).save()
            } finally {
                mongoose.connection.close()
            }
        })
    })
}