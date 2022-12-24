const { EmbedBuilder, Collection, PermissionsBitField , ButtonBuilder, StringSelectMenuBuilder, ActionRowBuilder, TextInputBuilder  } = require('discord.js');
const client = require('..');
const config = require('../config.json');

client.on('interactionCreate', async interaction => {

    if (!interaction.isStringSelectMenu()) return;


    
		if (interaction.isStringSelectMenu()) {
			let BMroleid;
			
		if (interaction.values[0] === `farvardin`) BMroleid = config.FarvardinRole
		if (interaction.values[0] === `ordibehesht`) BMroleid = config.OrdibeheshtRole
		if (interaction.values[0] === `khordad`) BMroleid = config.KhordadRole
		if (interaction.values[0] === `tir`) BMroleid = config.TirRole
		if (interaction.values[0] === `mordad`) BMroleid = config.MordadRole
		if (interaction.values[0] === `shahrivar`) BMroleid = config.ShahrivarRole
		if (interaction.values[0] === `mehr`) BMroleid = config.MehrRole
		if (interaction.values[0] === `aban`) BMroleid = config.AbanRole
		if (interaction.values[0] === `azar`) BMroleid = config.AzarRole
		if (interaction.values[0] === `dey`) BMroleid = config.DeyRole
		if (interaction.values[0] === `bahman`) BMroleid = config.BahmanRole
		if (interaction.values[0] === `esfand`) BMroleid = config.EsfandRole
	
	
			if (BMroleid) {
			  if (interaction.customId === 'Months') {
	
			  if (interaction.member.roles.cache.has(BMroleid)) {
				await interaction.member.roles.remove(BMroleid);
				return interaction.reply({
				  content: 'remove role!',
				  ephemeral: true
				});
			  }
			
			  if (!interaction.member.roles.cache.has(BMroleid)) {
				await interaction.member.roles.add(BMroleid);
				await interaction.member.roles.add(config.BioRole);
				return interaction.reply({
				  content: 'add role!',
				  ephemeral: true
				});
			  }
			}
			
		  }

          if (interaction.customId === 'News') {

            const rowembed = new EmbedBuilder()
            .setColor(`#00FF00`)
            .setDescription(`Your roles already upgraded`)
           await interaction.reply({ embeds: [rowembed], ephemeral: true }).catch((error) => {console.error(`cant send embed`, error );})
           const allnewsrole = [config.AnnouncementRole, config.UpdateRole, config.EventRole]
           
           await interaction.member.roles.remove(allnewsrole);
            await interaction.member.roles.remove(config.MentionRole);
            
            if (interaction.values[0] === `Announcement` || interaction.values[1] === `Announcement` || interaction.values[2] === `Announcement` ){
              await interaction.member.roles.add(config.AnnouncementRole);
              await interaction.member.roles.add(config.MentionRole);
            }
    
            if (interaction.values[0] === `Update` || interaction.values[1] === `Update` || interaction.values[2] === `Update`){
              await interaction.member.roles.add(config.UpdateRole);
              await interaction.member.roles.add(config.MentionRole);
            }
          
            if (interaction.values[0] === `Events` || interaction.values[1] === `Events` || interaction.values[2] === `Events` ){
              await interaction.member.roles.add(config.EventRole);
              await interaction.member.roles.add(config.MentionRole);
            }  
          }


		}


})