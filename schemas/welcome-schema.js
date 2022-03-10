const mongoose = require('mongoose')

const reqString = {
    type: String, 
    required: true
}

const welcomeSchema = mongoose.Schema({
    _id: reqString, //primary key
    channelId: reqString,
    text: reqString
})

//export the file
module.exports = mongoose.model('welcome-channels', welcomeSchema)