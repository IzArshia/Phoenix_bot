const { EmbedBuilder, ApplicationCommandType, ButtonBuilder, ActionRowBuilder, ButtonStyle, time } = require('discord.js');

module.exports = {

    name: 'clear',
	description: "Clear a specific amount of messages from a target or channel.",
	cooldown: 3000,
    type: ApplicationCommandType.ChatInput,
    default_member_permissions: 'ManageMessages',
    options: [{
        name: "amount",
        type: 4,
        required: true,
        description: "Amount of messages to clear."
    }, {
        name: "target",
        type: 6,
        required: false,
        description: "elect a target to clear their messages."
    }],

    run: async (client, interaction) => {


        const {channel, options} = interaction;

        const amount = options.getInteger('amount');
        const target = options.getUser("target");

        if(amount > 99)return interaction.reply({

            embeds: [{
                color: "15548997",
                title: "❌ Invalid amount",
                description: "You need at maximum of 99 amount"
            }]


        })

        const messages = await channel.messages.fetch({
            limit: amount +1,
        });

        const res = new EmbedBuilder()
            .setColor(0x5fb041)

        if(target) {
            let i = 0;
            const filtered = [];

            (await messages).filter((msg) =>{
                if(msg.author.id === target.id && amount > i) {
                    filtered.push(msg);
                    i++;
                }
            });

            await channel.bulkDelete(filtered).then(messages => {
                res.setDescription(`Succesfully deleted ${messages.size} messages from ${target}.`);
                interaction.reply({embeds: [res]}); // you can use ephemeral if you desire
            });
        } else {
            await channel.bulkDelete(amount, true).then(messages => {
                res.setDescription(`Succesfully deleted ${messages.size} messages from the channel.`);
                interaction.reply({embeds: [res]});
            });
        }






    }



}


