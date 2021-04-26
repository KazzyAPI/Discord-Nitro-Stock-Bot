module.exports = {
    name: 'nitro',
    aliases: ['sendnitro', 'givenitro'],
    description: "Sends nitro to user",
    async execute(client, message, args, Discord) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed()
        .setTitle('Error!')
        .setDescription('You do not have ADMINISTRATOR permisions.'))
        const { footermsg } = require('../../config.json')
        const generated = new Set();	
        const fs = require('fs')
        const giftee = message.mentions.users.first();
        const memberTarget = message.guild.members.cache.get(giftee.id);
        if(giftee) {
        let data;
      

        
        try{	
            data = fs.readFileSync(__dirname + "/" + args[1].toLowerCase() + ".json")
         	

        } catch{	
            
            return message.reply(args[1].toLowerCase()+' service do not exists')  	
        } 	
        let messageArray = message.content.split(" ");	
        if (!args[1]) return message.reply("Please, specify the service you want!");
        let account = JSON.parse(data);
        if (args[2] > account.length) return message.channel.send(new Discord.MessageEmbed()
        .setTitle('Awks....')
        .setColor('RED')
        .setDescription(`Imagine trying to send more nitro's than you own.....`)
        .setFooter('Awks......'))		
    
            if (account.length <= 0) { 
                return message.channel.send(new Discord.MessageEmbed()
                .setTitle(':x: There isnt enough stock for this request.')
                .setDescription('Please check the stock embed for updated stock count!'))
            }
            const embed = new Discord.MessageEmbed()
            .setTitle("Nitro Sent")
            .setDescription("Check your dm for the nitro gift link!")
            .setColor('GREEN')
            .setTimestamp()
            .setFooter('Nitro Stock Bot | KazzyDev#1111')	
            await message.channel.send({ embed });	
            await generated.add(message.author.id);
            let codes = ''
            
            for (var i = 0;i  < args[2];i++){
                codes += `${account[i].Gift_Link}\n`
          	
            }
            const res = new Discord.MessageEmbed()
            .setTitle("Here is your Nitro")
            .setDescription("Please Check the link and if revoked let us know!")
            .addFields(
                {name: 'Gift Type', value: account[0].Gift_Type, inline: true},
                {name: 'Gift Link', value: codes, inline: true}
            )
            .setColor('GREEN')
            .setTimestamp()
            .setFooter('Kazzys Nitro Stock Bot')	
            client.users.cache.get(giftee.id).send(res)
            for(var i = 0;i < args[2]; i++) {
            account.splice(0,1);
            }
           	
            fs.writeFileSync(__dirname + "/" + args[1] + ".json", JSON.stringify(account));
        } else {
            message.channel.send('mention pls')
        }
            
            
    }
}