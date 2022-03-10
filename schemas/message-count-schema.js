const mongoose = require('mongoose')

const messageCountSchema = mongoose.Schema({
    //user ID
    _id: {
        type: String,
        required: true
    },

    //count how many message the user send
    messageCount: {
        type: Number,
        required: true,
    }, 
})

module.exports = mongoose.model('message-count', messageCountSchema)