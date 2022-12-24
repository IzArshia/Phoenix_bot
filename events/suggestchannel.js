const { EmbedBuilder, Collection, PermissionsBitField } = require('discord.js')
const client = require('..');
const config = require('../config.json');

const cooldown = new Collection();

client.on('messageCreate', async message => {
	if(message.author.bot || message.channel.type == `DM`) return;

    if(message.channel.id == config.SuggestionsChannel){
		console.log(`message sended`)

		let embed = new EmbedBuilder()
		.setTitle(`New Suggestion`)
		.setColor(`Gold`)
		.setAuthor({ name: `${message.author.tag}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}`})
		.setDescription(`${message.content}`)
		.setTimestamp()

		message.channel.send({ embeds: [embed] }).then(msg => {
			message.delete()
			 msg.react(`👍`)
			 msg.react(`👎`)
		})
	}



});