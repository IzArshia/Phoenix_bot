const { EmbedBuilder, ApplicationCommandType, ButtonBuilder, ActionRowBuilder, ButtonStyle, time } = require('discord.js');

const { find } = require('node-emoji');
const polls = require("../../models/polls")

module.exports = {
        name: "poll",
        description: "Manage polls of your server",
        cooldown: 3000,
        type: ApplicationCommandType.ChatInput,
        default_member_permissions: 'Administrator',
        options: [{
            name: "create",
            type: 1,
            description: "Create a poll",
            options: [{
                name: "question",
                type: 3,
                required: true,
                description: "The question of the poll"
            }, {
                name: "channel",
                type: 7,
                required: true,
                description: "The channel where you want create the poll"
            }, {
                name: "options",
                type: 3,
                required: true,
                description: "The choices of this poll, seprate them by |",
            }, {
                name: "custom-emojis",
                type: 3,
                required: false,
                description: "Custom emojis for the chocies, seprate them by |"
            }]
        }, {
            name: "end",
            type: 1,
            description: "End a poll",
            options: [{
                name: "id",
                type: 3,
                required: true,
                description: "Message ID of the poll"
            }]
        }],

    run: async (client, interaction) => {
        await interaction.deferReply();

        let _emoji = ["🇦", "🇧", "🇨", "🇩", "🇪", "🇫", "🇬", "🇭", "🇮", "🇯", "🇰", "🇱", "🇲", "🇳", "🇴", "🇵", "🇶", "🇷", "🇸", "🇹", "🇺", "🇻", "🇼", "🇽", "🇾", "🇿"],
            emojis = [];

        let option = interaction.options.getSubcommand(),
            channel = interaction.options.getChannel("channel"),
            rawOptions = interaction.options.getString("options"),
            cEmojis = interaction.options.getString("custom-emojis") || "",
            id = interaction.options.getString("id"),
            question = interaction.options.getString("question"),
            poll = await polls.findOne({ message: id });

        if (option === "create") {
            rawOptions = rawOptions.split("|");
            cEmojis = cEmojis?.trim()?.replace(/ +/g, "")?.split("|");

            if (rawOptions.length < 2 || rawOptions.length > 25) return interaction.editReply({
                embeds: [{
                    color: "15548997",
                    title: "❌ Invalid Options",
                    description: "You need at least 2 options and a maximum of 25 options, You need to seprate options via `|`"
                }]
            });

            const rows = [new ActionRowBuilder()];

            for (let i = 0; i < rawOptions.length; i++) {
                let ind = Math.floor(i / 5);

                emojis.push(fixEmoji(client, cEmojis[i]) || _emoji[i]);

                const button = new ButtonBuilder({
                    customId: emojis[i],
                    emoji: emojis[i],
                    label: "0",
                    style: ButtonStyle.Secondary
                });

                rows[ind] ? rows[ind].addComponents(button) : rows[ind] = new ActionRowBuilder({
                    components: [button]
                });
            }

            channel.send({
                embeds: [{
                    color: "3447003",
                    title: question.slice(0, 256),
                    description: rawOptions.map((v, i) => `${cEmojis[i] || emojis[i]} ${v}`).join("\n"),
                    timestamp: new Date(),
                    footer: {
                        text: `Poll Started At`
                    }
                }],
                components: rows
            }).then(async (v) => {
                await polls.create({
                    question,
                    message: v.id,
                    channel: channel.id,
                    guild: interaction.guildId,
                    votes: {},
                    voters: [],
                    emojis
                });

                interaction.editReply({
                    embeds: [{
                        color: "5763719",
                        title: "✅ Poll Created",
                        description: `Check the poll [here](${v.url})`
                    }]
                });
            }).catch((e) => {
                console.log(e)
                interaction.editReply({
                    embeds: [{
                        color: "15548997",
                        title: "❌ Unable To Create The Poll",
                    }]
                });
            })
        } else if (option === "end") {
            if (!poll) return interaction.editReply({
                embeds: [{
                    color: "15548997",
                    title: "❌ Invalid Poll Message ID",
                }]
            });

            if (poll.ended) return interaction.editReply({
                embeds: [{
                    color: "15548997",
                    title: "❌ Poll is already Ended",
                }]
            });

            const msg = await interaction.guild.channels.cache.get(poll.channel).messages.fetch(id);

            if (!msg) return interaction.editReply({
                embeds: [{
                    color: "15548997",
                    title: "❌ Poll Not Endable",
                    description: `Poll message is deleted, So it is no longer endable`
                }]
            });

            const opt = msg.embeds[0].description?.split("\n");

            const x = Object.entries(poll.votes)?.sort((a, b) => b[1] - a[1])

            let winner = opt.filter(v => v.includes(x[0][0]));

            interaction.editReply({
                embeds: [{
                    color: "5763719",
                    title: "Poll Ended"
                }]
            })

            msg.edit({
                components: [],
                embeds: [{
                    title: msg.embeds[0].title,
                    color: "15548997",
                    description: `**Poll ended**\nThe most voted option got ${x[0][1]} votes and it was:\n${winner}`,
                    timestamp: new Date(),
                    footer: {
                        text: `Poll Ended At`
                    }
                }]
            });

            await polls.findOneAndUpdate({ message: id }, { ended: true });
        }
    }
}

function fixEmoji(client, emj = "") {
    const e = find(emj)?.emoji, e2 = client.emojis.cache.find(v => v.toString() === emj);

    return e2?.id || e;
}