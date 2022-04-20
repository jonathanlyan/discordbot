const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    content: String,
    username: mongoose.SchemaTypes.String,
    discordId: {
        type: mongoose.SchemaTypes.String, 
        required: true,
    }, 
});

//export the module
module.exports = mongoose.model('User', schema);