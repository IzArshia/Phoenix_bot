const console = require('console');
const {ButtonStyle, EmbedBuilder, Collection, PermissionsBitField , ButtonBuilder, StringSelectMenuBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, ModalBuilder  } = require('discord.js');
const client = require('..');
const config = require('../config.json');
const polls = require("../models/polls");

client.on('interactionCreate', async interaction => {
    
if (!interaction.isButton()) return console.log(`botton have a problem to change`); console.error()
    

        
        const pol = await polls.findOne({ message: interaction.message.id });
    
        if (!pol) return console.log(`not found poll`);
    
        await interaction.deferReply({
            ephemeral: true
        });
    
        if (pol.voters.includes(interaction.user.id)) return interaction.editReply({
            embeds: [{
                color: "15548997",
                title: "❌ Already Voted!"
            }]
        });
    
        pol.votes = pol.votes || {};
    
        if (pol.votes[interaction.customId]) pol.votes[interaction.customId] += 1
        else pol.votes[interaction.customId] = 1;
    
        pol.voters.push(interaction.user.id);
    
        await polls.findOneAndUpdate({ message: pol.message }, pol);
    
        interaction.editReply({
            embeds: [{
                color: "5763719",
                title: "✅ Voted Successfully"
            }]
        });
    

      console.log(pol.voters.length)
        
    const m = interaction.message;
    let newbut =[]

    for (let i = 0; i < pol.emojis.length; i++) {

         const button = new ButtonBuilder({
            customId: `${pol.emojis[i]}`,
            emoji: `${pol.emojis[i]}`,
            label: `${pol.votes[pol.emojis[i]] || 0}`,
            style: ButtonStyle.Secondary
        });
       
        newbut.push(button)

        // let newbut = m.components.push([row])

    }
    const row = new ActionRowBuilder().addComponents(newbut)
        
        
        
    await m.edit({
  
        components: [row]
        
              
        
      })

})