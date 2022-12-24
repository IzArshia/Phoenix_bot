const { ButtonStyle, EmbedBuilder, ButtonBuilder, StringSelectMenuBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, ModalBuilder } = require('discord.js');
const client = require('..');
const chalk = require('chalk');
const figlet = require('figlet');
const irmoment = require('jalali-moment');
const usmoment = require('moment');
const fs = require('fs');
const config = require('../config.json');
const { joinVoiceChannel } = require('@discordjs/voice');




// Data File Path
const DATA_DIR = './Data.json';

// Don't touch this --->
if(!fs.existsSync(DATA_DIR)) fs.writeFileSync(DATA_DIR, '{}');
// <--- Don't touch this


var Data = require('../Data.json');
const { buttons } = require('..');
var TrackerRuleChannel



client.on("ready", () => {
	console.log(figlet.textSync("Phonix Team"));
	console.log(chalk.red(`Logged in as ${client.user.tag}!`))

//join voice

	function joinvoice(){
   
		const connection = joinVoiceChannel({
			channelId: config.voicechid, // ID adadi channel
			guildId: config.guildId, // ID adadi Server
			selfDeaf: true, // True
			
	
			adapterCreator: client.guilds.cache.get(config.guildId).voiceAdapterCreator, // ID adadi Server
			
		});

		console.log(chalk.greenBright(`${client.user.username} Connect to the Voice!`));
		
	}
	try { joinvoice() } catch(error) {console.error(error)};

	function Moment(){

		const PhonixSvID = client.guilds.cache.get(config.guildId)
		setInterval(() => {
			const dateIR = irmoment().locale('fa').format('YYYY/M/D')
			const dateUSA = usmoment().format('l')
			const TotalMembers = PhonixSvID.memberCount

			const channelirmt = PhonixSvID.channels.cache.get(config.ChMomentIr)
			const channelusmt = PhonixSvID.channels.cache.get(config.ChMomentUs)
			const ChannelTotalMembers= PhonixSvID.channels.cache.get(config.ChTotalMembers)
	
			ChannelTotalMembers.setName(`╔「👥」𝐓𝐨𝐭𝐚𝐥: ${TotalMembers}`)
			channelirmt.setName(`╠「📆」𝐈𝐑 :${dateIR}`)
			channelusmt.setName(`╚「📆」𝐔𝐒 :${dateUSA}`)
		}, 3000)

	}
	try { Moment() } catch(error) {console.error(error)};
		
		
//TrackerChannel for Rule

TrackerChannel = client.channels.cache.get(config.RulesChannel);
TrackerRolesChannel = client.channels.cache.get(config.RolesChannel);
TrackerFeedChannel = client.channels.cache.get(config.FeedbackChannel);


if(!TrackerChannel || !TrackerRolesChannel || !TrackerFeedChannel)
{
	console.log("Couldn't fetch channels!");
	return;
}

CheckRulesembed();
CheckColorembed();
CheckAgeembed();
CheckBirthembed();
CheckMentionembed();
CheckFeedBackembed();
});

function CheckRulesembed()
     {
		const Rulesembed = new EmbedBuilder()
        .setColor(`#00aeff`)
        .setTitle(`**Rules**`)
        .setDescription(`  🇮🇷  اینجا سرور فونیکس است، یک  جامعه برای تمامی اشخاص با هر عقیده و علاقه در زمینه های مختلف که سعی داریم با همراهی شما عزیزان به مکانی سالم و دور از هرگونه حاشیه برای شما عزیزان فراهم نماییم و از شما انتظار میرود با رعایت قوانین در این راه ما را همراهی نمایید. شما میتوانید با کلیک بر روی دکمه های زیر قوانین اصلی دیسکورد و قوانین اختصاصی سرور را مشاهده کنید. با تشکر از همراهی شما عزیزان گرامی سرور\n\n 🇺🇸 Here is Phoenix server, a community for all people with any beliefs and interests in various fields that we try to provide a safe place for you dear ones with you, far from any margins, and you are expected to follow the rules in this way. You can see the main rules of the discord and the specific rules of the server by clicking on the buttons below. Thanks for your support. `)
        .setImage(`https://cdn.discordapp.com/attachments/846778405084725268/958019683011952670/index.gif`)
        .setThumbnail('https://cdn.discordapp.com/attachments/846778405084725268/958034461017137162/filename1.png')

	const PerRulbtn = new ButtonBuilder().setCustomId('PerRule').setLabel('Persian Rules').setStyle(ButtonStyle.Primary).setEmoji('🇮🇷')
    const EngRulbtn = new ButtonBuilder().setCustomId('EngRule').setLabel('English Rules').setStyle(ButtonStyle.Primary).setEmoji('🇺🇸')
    const DisRulbtn = new ButtonBuilder().setCustomId('DisRule').setLabel('Disscord Rules').setStyle(ButtonStyle.Primary).setEmoji('958321993625784350')
	const rowRUL = new ActionRowBuilder().addComponents(PerRulbtn, EngRulbtn, DisRulbtn)

		const trackerMsgData = { embeds: [Rulesembed], components: [rowRUL] };
		
		 if(!Data.TrackerMsgId)
                              {
								TrackerChannel.send(trackerMsgData).then(sentMsg =>
									{
										// ذخیره اطلاعات تغییر کرده
										Data.TrackerMsgId = sentMsg.id;
										fs.writeFileSync(DATA_DIR, JSON.stringify(Data, null, 4));
									})
									.catch(() => console.log("Couldn't send tracker message!"));
								
							  }
							  else
							  {
								  // ویرایش پیام ترکر
								  TrackerChannel.messages.fetch(Data.TrackerMsgId)
								  .then(fetchedMsg => fetchedMsg.edit(trackerMsgData))
								  .catch(() => 
								  {
									  delete Data.TrackerMsgId;
									  console.log("Couldn't fetch tracker message, re-sending message in " + config.Timer + " seconds...");
								  });
							  }setTimeout(CheckRulesembed, config.Timer * 1000)
		}


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



		function CheckColorembed()
     {

		const embed = new EmbedBuilder().setColor('#0099ff').setTitle('**Color Role**').setDescription('> Use Button For Get Color Role').setImage(`https://cdn.discordapp.com/attachments/846778405084725268/953735611192332378/isupportimg_1497612167869.gif`)
		const Redbutton = new ButtonBuilder().setCustomId('redbtn').setLabel('Red').setStyle(ButtonStyle.Primary).setEmoji('🍓')
		const Bluebutton = new ButtonBuilder().setCustomId('bluebtn').setLabel('Blue').setStyle(ButtonStyle.Primary).setEmoji('🫐')
		const Yellowbutton = new ButtonBuilder().setCustomId('yellowbtn').setLabel('Yellow').setStyle(ButtonStyle.Primary).setEmoji('🍋')
		const Greenbutton = new ButtonBuilder().setCustomId('greenbtn').setLabel('Green').setStyle(ButtonStyle.Primary).setEmoji('🍏')
		const Orangebutton = new ButtonBuilder().setCustomId('orangebtn').setLabel('Orange').setStyle(ButtonStyle.Primary).setEmoji('🍊')
		const row = new ActionRowBuilder().addComponents(Redbutton, Bluebutton, Yellowbutton, Greenbutton, Orangebutton)

		const trackerRlMsgData = { embeds: [embed], components: [row] };

		if(!Data.TrackerRlMsgId)
                              {
								TrackerRolesChannel.send(trackerRlMsgData).then(sentMsg =>
									{
										// ذخیره اطلاعات تغییر کرده
										Data.TrackerRlMsgId = sentMsg.id;
										fs.writeFileSync(DATA_DIR, JSON.stringify(Data, null, 4));
									})
									.catch(() => console.log("Couldn't send tracker message!"));
								
							  }
							  else
							  {
								  // ویرایش پیام ترکر
								  TrackerRolesChannel.messages.fetch(Data.TrackerRlMsgId)
								  .then(fetchedMsg => fetchedMsg.edit(trackerRlMsgData))
								  .catch(() => 
								  {
									  delete Data.TrackerRlMsgId;
									  console.log("Couldn't fetch tracker message, re-sending message in " + config.Timer + " seconds...");
								  });
							  }setTimeout(CheckColorembed, config.Timer * 1000)
	 }

	 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

	 function CheckAgeembed()
     {
		
		const embed = new EmbedBuilder().setColor('#0099ff').setTitle('**Age Role**').setDescription('> Use Button For Get Youre Age Role').setImage(`https://cdn.discordapp.com/attachments/846778405084725268/953731556395057152/darwin_800x600.gif`)
		const fifteenage = new ButtonBuilder().setCustomId('fifbtn').setLabel('-15').setStyle(ButtonStyle.Primary).setEmoji('👦')
		const eighteenage = new ButtonBuilder().setCustomId('eigredbtn').setLabel('15-18').setStyle(ButtonStyle.Primary).setEmoji('🧒')
		const Twentyone = new ButtonBuilder().setCustomId('twebtn').setLabel('18-21').setStyle(ButtonStyle.Primary).setEmoji('🧔')
		const thirtyage = new ButtonBuilder().setCustomId('thibtn').setLabel('21-30').setStyle(ButtonStyle.Primary).setEmoji('👨')
		const fortyage = new ButtonBuilder().setCustomId('forbtn').setLabel('+30').setStyle(ButtonStyle.Primary).setEmoji('👨‍🦳')
		const row = new ActionRowBuilder().addComponents(fifteenage, eighteenage, Twentyone, thirtyage, fortyage)
		
		const trackerAgeMsgData = { embeds: [embed], components: [row] };

		if(!Data.TrackerAgeMsgId)
         {
			
			TrackerRolesChannel.send(trackerAgeMsgData).then(sentMsg =>
				{
					// ذخیره اطلاعات تغییر کرده
					Data.TrackerAgeMsgId = sentMsg.id;
					fs.writeFileSync(DATA_DIR, JSON.stringify(Data, null, 4));
				})
				.catch(() => console.log("Couldn't send tracker message!"));
			
		  }
		  else
		  {
			  // ویرایش پیام ترکر
			  TrackerRolesChannel.messages.fetch(Data.TrackerAgeMsgId)
			  .then(fetchedMsg => fetchedMsg.edit(trackerAgeMsgData))
			  .catch(() => 
			  {
				  delete Data.TrackerAgeMsgId;
				  console.log("Couldn't fetch tracker message, re-sending message in " + config.Timer + " seconds...");
			  });
		  }setTimeout(CheckAgeembed, config.Timer * 1000)
		
	 }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

	 function CheckBirthembed()
     {
		const MonthMenu = new StringSelectMenuBuilder().setCustomId('Months').setPlaceholder('Select The Month Of Your Birth').addOptions([{
			label: 'Farvardin',
			description: 'Select This Button For Get The Role Of Farvardin',
			value: 'farvardin',
			emoji: `🌸`
		}, {
			label: 'Ordibehesht',
			description: 'Select This Button For Get The Role Of Ordibehesht',
			value: 'ordibehesht',
			emoji: `🌸`
		}, {
			label: 'Khordad',
			description: 'Select This Button For Get The Role Of Khordad',
			value: 'khordad',
			emoji: `🌸`
		}, {
			label: 'Tir',
			description: 'Select This Button For Get The Role Of Tir',
			value: 'tir',
			emoji: `🌻`
		}, {
			label: 'Mordad',
			description: 'Select This Button For Get The Role Of Mordad',
			value: 'mordad',
			emoji: `🌻`
		}, {
			label: 'Shahrivar',
			description: 'Select This Button For Get The Role Of Shahrivar',
			value: 'shahrivar',
			emoji: `🌻`
		}, {
			label: 'Mehr',
			description: 'Select This Button For Get The Role Of Mehr',
			value: 'mehr',
			emoji: `🍁`
		}, {
			label: 'Aban',
			description: 'Select This Button For Get The Role Of Aban',
			value: 'aban',
			emoji: `🍁`
		}, {
			label: 'Azar',
			description: 'Select This Button For Get The Role Of Azar',
			value: 'azar',
			emoji: `🍁`
		}, {
			label: 'Dey',
			description: 'Select This Button For Get The Role Of Dey',
			value: 'dey',
			emoji: `❄`
		}, {
			label: 'Bahman',
			description: 'Select This Button For Get The Role Of Bahman',
			value: 'bahman',
			emoji: `❄`
		}, {
			label: 'Esfand',
			description: 'Select This Button For Get The Role Of Esfand',
			value: 'esfand',
			emoji: `❄`
		}])
		const row = new ActionRowBuilder().addComponents(MonthMenu)
    	const embed = new EmbedBuilder().setColor('#0099ff').setTitle('**Birth Month Role**').setDescription('> Use A Button in Menu For Get The Month Of Your Birth Role').setImage(`https://cdn.discordapp.com/attachments/846778405084725268/953744911755247646/ezgif.com-gif-maker.gif`)

		const trackerBirthMsgData = { embeds: [embed], components: [row] };

		
		if(!Data.TrackerBirthMsgId)
         {
			
			TrackerRolesChannel.send(trackerBirthMsgData).then(sentMsg =>
				{
					// ذخیره اطلاعات تغییر کرده
					Data.TrackerBirthMsgId = sentMsg.id;
					fs.writeFileSync(DATA_DIR, JSON.stringify(Data, null, 4));
				})
				.catch(() => console.log("Couldn't send tracker message!"));
			
		  }
		  else
		  {
			  // ویرایش پیام ترکر
			  TrackerRolesChannel.messages.fetch(Data.TrackerBirthMsgId)
			  .then(fetchedMsg => fetchedMsg.edit(trackerBirthMsgData))
			  .catch(() => 
			  {
				  delete Data.TrackerBirthMsgId;
				  console.log("Couldn't fetch tracker message, re-sending message in " + config.Timer + " seconds...");
			  });
		  }setTimeout(CheckBirthembed, config.Timer * 1000)


	 }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function CheckMentionembed(){

	const embed = new EmbedBuilder().setColor('#0099ff').setTitle('**Mention Roles**').setDescription('> Use A Button in Menu For Get The Mention Roles').setImage(`https://cdn.discordapp.com/attachments/846778405084725268/953961603433369630/4eb945eec0590f430da2b6fc4e6d9594.gif`)
    const NewsMenu = new StringSelectMenuBuilder().setCustomId('News').setPlaceholder('Select The Mention Roles').setMinValues(1).setMaxValues(3).addOptions([{
            label: 'Announcement',
            value: 'Announcement',
            emoji: `📢`
        },
        {
            label: 'Update',
            value: 'Update',
            emoji: `🔔`
        },
        {
            label: 'Events',
            value: 'Events',
            emoji: `📯`
        }
    ])
    const Addallnb = new ButtonBuilder().setCustomId('addnb').setLabel('Add All').setStyle(ButtonStyle.Success).setEmoji('📥')
    const removeallNB = new ButtonBuilder().setCustomId('revnb').setLabel('Remove All').setStyle(ButtonStyle.Danger).setEmoji('🗑️')
    const rownews = new ActionRowBuilder().addComponents(NewsMenu)
    const rowremoveNB = new ActionRowBuilder().addComponents(Addallnb, removeallNB)

	const trackerMentionMsgData = { embeds: [embed], components: [rownews, rowremoveNB] };

	
	if(!Data.TrackerMentionMsgId)
	{
	   
	   TrackerRolesChannel.send(trackerMentionMsgData).then(sentMsg =>
		   {
			   // ذخیره اطلاعات تغییر کرده
			   Data.TrackerMentionMsgId = sentMsg.id;
			   fs.writeFileSync(DATA_DIR, JSON.stringify(Data, null, 4));
		   })
		   .catch(() => console.log("Couldn't send tracker message!"));
	   
	 }
	 else
	 {
		 // ویرایش پیام ترکر
		 TrackerRolesChannel.messages.fetch(Data.TrackerMentionMsgId)
		 .then(fetchedMsg => fetchedMsg.edit(trackerMentionMsgData))
		 .catch(() => 
		 {
			 delete Data.TrackerMentionMsgId;
			 console.log("Couldn't fetch tracker message, re-sending message in " + config.Timer + " seconds...");
		 });
	 }setTimeout(CheckMentionembed, config.Timer * 1000)
}


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


function CheckFeedBackembed(){

	const Feedembed = new EmbedBuilder()
        .setColor(`#00aeff`)
        .setTitle(`**Feedback**`)
        .setDescription(`  .در اینجا شما میتوانید انتقادات و پیشنهادات خود را درباره سرور فونیکس با تیم ما به اشتراک بگزارید\n\n Here you can share your criticisms and suggestions about the Phoenix server with our team. `)
        .setImage(`https://cdn.discordapp.com/attachments/846778405084725268/1055535417904091166/Poenix_Feedback.gif`)
        .setThumbnail('https://cdn.discordapp.com/attachments/846778405084725268/958034461017137162/filename1.png')
		const Feedbutton = new ButtonBuilder().setCustomId('FeedBackbtn').setLabel('FeedBack').setStyle(ButtonStyle.Secondary).setEmoji('🧾')
		

		const rowFeed = new ActionRowBuilder().addComponents(Feedbutton)

	
		
		
		const trackerFeedMsgData = { embeds: [Feedembed], components: [rowFeed] };

		if(!Data.TrackerFeedMsgId)
	{
	   
		TrackerFeedChannel.send(trackerFeedMsgData).then(sentMsg =>
		   {
			   // ذخیره اطلاعات تغییر کرده
			   Data.TrackerFeedMsgId = sentMsg.id;
			   fs.writeFileSync(DATA_DIR, JSON.stringify(Data, null, 4));
		   })
		   .catch(() => console.log("Couldn't send tracker message!"));
	   
	 }
	 else
	 {
		 // ویرایش پیام ترکر
		 TrackerFeedChannel.messages.fetch(Data.TrackerFeedMsgId)
		 .then(fetchedMsg => fetchedMsg.edit(trackerFeedMsgData))
		 .catch(() => 
		 {
			 delete Data.TrackerFeedMsgId;
			 console.log("Couldn't fetch tracker message, re-sending message in " + config.Timer + " seconds...");
		 });
	 }setTimeout(CheckFeedBackembed, config.Timer * 1000)


}