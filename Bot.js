require('dotenv').config()
const discord = require('discord.js');
const client = new discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});

client.on('message', (message) => {
    if(message.author.username === 'Exander') {
        message.channel.send(`Hello there, ${message.author}!`).catch(err => console.log(err))
        console.log(message.content);
    }
});