const Discord = require('discord.js');
const discordClient = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');



discordClient.commands = new Discord.Collection();
discordClient.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(discordClient, Discord);
})
discordClient.on('message', async message => {
    
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;
try{
    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();
    

} catch(error) {
}
})

    




function dateLog(){
    // function for date log
    return "\x1b[36m" + new Date().toLocaleString() + "\x1b[0m | ";
}






discordClient.login(config.token);
