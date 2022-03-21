const { default: mongoose } = require('mongoose')
const mongo = require('./mongo')
const messageCountSchema = require('./schemas/message-count-schema')

module.exports = (client) => {
    client.on('messageCreate', async (message) => {
        const {author} = message
        // console.log('AUTHOR:', author)
        const { id } = author

        //new conncetion to mongos
        await mongo().then(async (mongoose) => {
            try{
            await messageCountSchema.findOneAndUpdate({
                _id: id
            }, {
                $inc:{
                    'messageCount': 1,
                },
            },
            {
                upsert: true,
            }

            ).exec()
            }finally{
                mongoose.connection.close()
            }
        })

    })
}