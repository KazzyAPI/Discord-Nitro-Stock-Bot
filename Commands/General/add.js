module.exports = {
    name: 'addstock',
    description: "This is a ping command.",
    async execute(client, message, args, Discord) {
       
        const fs = require('fs');
      
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed()
        .setTitle('Error!')
        .setDescription('You do not have ADMINISTRATOR permisions.'))
        fs.readFile(__dirname + "/" + args[0].toLowerCase() + ".json",function(err, data) {
            let og = args.slice(1).toString()   
            let codess = og.split('\n');   
        if(err){
            let error = new Discord.MessageEmbed()
            .setTitle('Error')
            .setDescription('There seems to have been a problem adding to stock. Check your spelling and try again.')
            .setColor('RED')
            message.channel.send(error)
    }
        else {                
            data = JSON.parse(data)	
            for (var i = 0;i < codess.length;i++) {   
            let newData = {"Gift_Type":args[0],"Gift_Link":codess[i]}	
            try{	
                data.push(newData)	
                fs.writeFileSync(__dirname + "/" + args[0].toLowerCase()+".json", JSON.stringify(data))	
                
            } catch {	
                message.channel.send('An error has occured!')
            }
        }	
        message.channel.send(new Discord.MessageEmbed()
                .setTitle(':white_check_mark: Service Created!')
                .setColor('GREEN')
                .setDescription('Data has been saved to db!'))	
        }	
    });         
    }
}