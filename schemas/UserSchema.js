const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    content: String,
    username: String,
    discordId: {
        type: String, 
        required: true,
    }, 
});

//export the module
module.exports = mongoose.model('User', schema);