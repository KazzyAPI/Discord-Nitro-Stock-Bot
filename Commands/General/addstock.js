module.exports = {
    name: 'add1',
    aliases: ['adding', 'anitro'],
    description: "This adds nitro gift to json",
    execute(client, message, args, Discord) {
        const fs = require('fs');
        const config = require('../config.json');
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed()
        .setTitle('Error!')
        .setDescription('You do not have ADMINISTRATOR permisions.'))
    
      
     

        fs.readFile(__dirname + "/" + args[0].toLowerCase() + ".json",function(err, data) {
           


            let og = args.slice(1).toString()   
            let codess = og.split('\n');  
            
        if(err){
           
            
                console.log(arr[0])
            for (var i = 0;i < arr.length;i++) {
            let newnewData = 	
            [{	
                "Gift_Type":args[0],	
                "Gift_Link":arr[i],
                "Author":message.author.id	
            }]
            	
            try {	
                fs.writeFileSync(__dirname + "/" + args[0].toLowerCase()+".json", JSON.stringify(newnewData))	
                
            } catch {	
                message.channel.send('**Error** Cannot create service and add that account!')	

            }
        }	
        // if(message.channel.type == 'dm') {
        //     message.author.send(new Discord.MessageEmbed()
        //         .setTitle(':white_check_mark: Service Created!')
        //         .setColor('GREEN')
        //         .setDescription('Data has been saved to db!'))   
        // } else {
        message.channel.send(new Discord.MessageEmbed()
                .setTitle(':white_check_mark: Service Created!')
                .setColor('GREEN')
                .setDescription('Data has been saved to db!'))
    }
        else {                
           // console.log(codess.length)
            data = JSON.parse(data)	
            for (var i = 0;i < codess.length;i++) {
                
            let newData = {"Gift_Type":args[0],"Gift_Link":codess[i]}	
           
            try{	
                data.push(newData)	
                fs.writeFileSync(__dirname + "/" + args[0].toLowerCase()+".json", JSON.stringify(data))
                console.log('Its this stop')	
                
            } catch {	
                message.channel.send('**Error** Cannot add that account!')	
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