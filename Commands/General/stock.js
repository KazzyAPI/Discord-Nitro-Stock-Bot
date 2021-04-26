module.exports = {
    name: 'help',
    
    description: "Grabs the stock for json",
    async execute(client, message, args, Discord) {
       
       let embed = new Discord.MessageEmbed()
       .setTitle('Help Menu')
       .setColor('RANDOM')
       .addFields(
            {name: '\u200b', value: 'Please keep in mind that referring to type it means the following : boostmonthly/boostyearly/classicmonthly/classicyearly'},
           {name: 'addstock <type> <paste-codes>', value: 'Does as it says, please ensure each new code is on a new line.'},
           {name: 'nitro <user> <type> <amount>', value: 'Sends a specific set of nitros to a user. User must be in server.'},
           {name: 'help', value: 'Got you here.'},
           {name: 'stock', value: 'Shows what we currently have.'},
       )
       setFooter('Nitro Stock Bot | KazzyDev#1111')
            
            
    }
}