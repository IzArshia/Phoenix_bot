const { EmbedBuilder, Collection, PermissionsBitField , ButtonBuilder, StringSelectMenuBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, ModalBuilder, AttachmentBuilder } = require('discord.js');
const client = require('..');
const config = require('../config.json');
const Canvas = require('canvas');

const { welcomeImage } = require('ultrax');

client.on('guildMemberAdd', async member => {

  const welcomeCanvas = {};
    welcomeCanvas.create = Canvas.createCanvas(1024, 500);
    welcomeCanvas.context = welcomeCanvas.create.getContext('2d');

    let fontsize = 45;
    Canvas.registerFont('./font/alata-regular.ttf', { family: 'alata' })
    const ctx = welcomeCanvas.context;
    ctx.font = `${fontsize}px alata`;
    ctx.fillStyle = "#ffffff";

    const background = 'https://i.imgur.com/XtImCKS.png';

    const bg = await Canvas.loadImage(background);
    ctx.drawImage(bg, 0, 0, 1024, 500);
    ctx.textAlign = 'center';
    ctx.fillText(`welcome`, 512, 360);
    ctx.beginPath();
    ctx.arc(512, 166, 128, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fill();
    
    const canvas = welcomeCanvas;
    canvas.context.font = `${fontsize}px alata`,
    canvas.context.textAlign = 'center';
    canvas.context.fillText(`${member.user.tag}`, 512, 410);
    canvas.context.font = `${fontsize}px alata`;
    canvas.context.fillText(`To Phoenix Team Server`, 512, 455);
    canvas.context.beginPath();
    canvas.context.arc(512, 166, 119, 0, Math.PI * 2, true);
    canvas.context.closePath();
    canvas.context.clip();
    const attachment = new AttachmentBuilder(canvas.create.toBuffer(), `welcome.png`)

    client.channels.cache.get("966405787670949908").send(attachment);

});