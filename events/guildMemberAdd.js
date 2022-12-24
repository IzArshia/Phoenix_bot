const { EmbedBuilder, Collection, PermissionsBitField , ButtonBuilder, StringSelectMenuBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, ModalBuilder, MessageAttachment  } = require('discord.js');
const client = require('..');
const config = require('../config.json');
const Canvas = require('canvas');

const { welcomeImage } = require('ultrax');

client.on('guildMemberAdd', async member => {
  const bg = 'https://s26.picofile.com/file/8457481842/background.png';
  const avatar = member.user.displayAvatarURL({ extension: "png" });
  const title = "Welcome";
  const subtitle = member.user.tag;
  const footer = `To Phoenix Team Server`;
  const color = '#ffffff';
  const channel = member.guild.channels.cache.get('966405787670949908')
  Canvas.registerFont('./font/Roboto-Light.ttf', { family: 'alata' })

  const options = {
    font: "alata",
    attachmentName: `welcome-${member.id}`,
    title_fontSize: 80,
    subtitle_fontSize: 50,
    footer_fontSize: 30
  };

  const image = await welcomeImage(bg, avatar, title, subtitle, footer, color, options);

  channel.send({ files: [image] });
});