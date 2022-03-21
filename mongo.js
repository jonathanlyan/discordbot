const mongoose = require('mongoose')
const {mongoPath} = require('./config.json')


//export the file path
module.exports = async () => {
    await mongoose.connect(mongoPath)
    return mongoose
}