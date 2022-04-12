const Joi = require('joi')
const express = require('express')
const {Client, Intents } = require('discord.js')
const mongoose = require('mongoose')
const config = require('./config.json')
const mongo = require('./mongo')
const command = require('./command')
const Schema = mongoose.Schema

//create user input for name and password
const schema = new Schema({
    username: {
        type: String, 
        unique: true, 
        require: true,
        minlength:5,
        maxlength: 15
    },
    password: {
        type: String, 
        require:true,
        unique:true,
        minlength: 8,
        maxlength: 20
    }
})

//validate user input
function validateUser( user ) {
    const schema = {
        username: Joi.string().min(5).max(15).required(),
        password: Joi.string().min(8).max(20).required()
    };
    return Joi.validate(user,schema);
}


const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', async ()=>{
    console.log('bot is on')
//add a command where user can type "/" and pop up input on mongo
    await mongo().then((mongoose) =>{
    try{
        console.log('mongo connection sucess')
    }finally{
        mongoose.connection.close()
    } 
})
//create a commnad where the bot let user input the data
    command(client, ['register'], )
})

client.login(config.token)