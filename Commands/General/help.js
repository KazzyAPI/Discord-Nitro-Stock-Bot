module.exports = {
    name: 'stock',
    aliases: ['inv', 'nitros'],
    description: "Grabs the stock for json",
    async execute(client, message, args, Discord) {
       
        const { footermsg } = require('../../config.json')
        const generated = new Set();	
        const fs = require('fs')
        
        
        
            classicMonthly = fs.readFileSync(__dirname + "/" + "classicmonthly" + ".json")
            boostMonthly = fs.readFileSync(__dirname + "/" + "boostmonthly" + ".json")
            classicYearly = fs.readFileSync(__dirname + "/" + "boostyearly" + ".json")
            boostYearly = fs.readFileSync(__dirname + "/" + "boostyearly" + ".json")
        clm = JSON.parse(classicMonthly);
        cly = JSON.parse(classicYearly);
        bm = JSON.parse(boostMonthly);
        by = JSON.parse(boostYearly);

            const embed = new Discord.MessageEmbed()
            .setTitle('Current Stock')
            .setColor('GREEN')
            .addFields(
                {name: `Classic's (Monthly)`, value: clm.length, inline: true},
                {name: `Boost's (Monthly)`, value: bm.length, inline: true},
                {name: `Classic's (Yearly)`, value: cly.length, inline: true},
                {name: `Classic's (Yearly)`, value: by.length, inline: true},
                {name: `Server Boost`, value: 0, inline: true},

            )
            .setFooter('Nitro Stock Bot | Made by KazzyDev#1111')
            message.channel.send(embed)
            
            
            
    }
}