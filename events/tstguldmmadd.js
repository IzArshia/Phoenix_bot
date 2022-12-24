const { EmbedBuilder, Collection, PermissionsBitField } = require('discord.js')
const ms = require('ms');
const client = require('..');
const config = require('../config.json');

const prefix = client.prefix;
const cooldown = new Collection();

client.on('message', message => {
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase(); 

    if(command == "test"){
        client.emit('guildMemberAdd', message.member);
    }
  
});