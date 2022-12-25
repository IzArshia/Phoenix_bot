const { EmbedBuilder, Collection, PermissionsBitField , ButtonBuilder, StringSelectMenuBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, ModalBuilder  } = require('discord.js');
const client = require('..');
const config = require('../config.json');
const polls = require("../models/polls");
client.on('interactionCreate', async interaction => {
	if (!interaction.isButton()) return console.log(`botton have a problem`,);


    if (interaction.customId === 'DisRule') {
          
        const DisRulesEmbed = new EmbedBuilder()
        .setColor(`#00aeff`)
        .setTitle(`🛡 **Discord Rules**`)
        .setDescription(`> 1.**Do not harass others or organize, promote, or participate in harassment.** Disagreements happen and are normal, but making continuous, repetitive, or severe negative comments or circumventing a block or ban can cross the line into harassment and is not okay.\n\n> 2.**Do not organize, promote, or participate in hate speech or hateful conduct.** It’s unacceptable to attack a person or a community based on attributes such as their race, ethnicity, caste, national origin, sex, gender identity, gender presentation, sexual orientation, religious affiliation, age, serious illness, disabilities, or other protected classifications.\n\n> 3.**Do not make threats of violence or threaten to harm others.** This includes indirect or suggestive threats, as well as sharing or threatening to share someone’s personally identifiable information (also known as doxxing).\n\n> 4.**Do not make adult content available to anyone under the age of 18.** You must be age 18 or older to participate in adult content on Discord. You must apply the age-restricted label to any channels or servers if they contain adult content or other restricted content such as violent content.\n\n•Do not use adult content in avatars, server banners, server icons, invite splashes, emoji, stickers, or any other space that cannot be age-restricted.\n\n> 5.**Do not share sexually explicit content of other people without their consent,** or promote the sharing of non-consensual intimate materials (images, video, or audio), sometimes known as revenge porn.\n\n> 6.**Do not share content that glorifies or promotes suicide or self-harm,** including any encouragement to others to cut themselves or embrace eating disorders such as anorexia or bulimia.\n\n•Self-harm threats used as a form of emotional manipulation or coercion are also prohibited.\n\n> 7.**Do not share real media depicting gore, excessive violence, or animal harm, especially with the intention to harass or shock others.**\n\n> 8.**Do not share content that violates anyone\'s intellectual property or other rights.**\n\n> 9.**Do not coordinate or participate in malicious impersonation of an individual or an organization**atire and parody are okay.\n\n> 10.**Do not engage in activities intended to cause damage or gain unauthorized access to another user\'s account, network, or system.** This includes impersonating Discord staff, distributing malware, authentication token theft, phishing, DDOS, and other hacking or social engineering techniques.\n\n> 11.**Do not distribute or provide access to content involving the hacking, cracking, or distribution of stolen goods, pirated content, or accounts.** This includes sharing or selling game cheats or hacks.\n`)

        await interaction.reply({
          embeds: [DisRulesEmbed],
          ephemeral: true
        })
      }

      if (interaction.customId === 'PerRule') {

        const PerRulesEmbed = new EmbedBuilder()
        .setColor(`#00aeff`)
        .setTitle(`🇮🇷 **Persian Rules**`)
        .setDescription(`• **شخصیت خوبی از خود به اشتراک بگزارید** 😊\n\nدر سرور محترمانه و با ادب با یکدیگر رفتار کنید و از استفاده از حرف های رکیک، فحاشی، توهین به اعتقادات، مسخره کردن یکدیگر و... خودداری کنید\n\n• **• از اسم و پروفایل مناسب استفاده کنید** 🖼️\n\nاستفاده از هرگونه کلمات بد در اسم و استاتوس یا اسفاده از هرگونه عکس و بنر غیر اخلاقی در پروفایل شما در سرور غیر مجاز است.\n\n• **اسپم نکنید و نظم چنل را بهم نریزید** 📨\n\nاز ارسال پیام، گیف، استیکر، منشن و کامند های بات به صورت پشت سر هم و بیش از حد مجاز خودداری کنید. این کار شما سبب بهم ریخته شدن نظم چنل و ایجاد شلوغی و گیج کنندگی به دور از نظم و گفت و گوی سالم میشود.\n\n•** محتوای نامناسب و غیر مجاز ارسال نکنید** 🔞\n\nارسال هر گونه محتوای ازار دهنده و NSFW (پورن) در سرور غیر مجاز است زیرا در این سرور افراد با هر رده سنی مختلف وجود دارد.\n\n• **از گفت و گوی نژادپرستانه خودداری کنید** 👥\n\nبه نژاد ، افکار، قومیت، جنسیت، طرز فکر، دین و مذهب، اعتقادات و ... هم دیگر احترام بگزارید و به طور محترمانه نظر خود زا بیان کنید و هرگز افکار و محتوای توهین آمیز و نژادپرستانه خود را نشر ندهید.\n\n• **از تبلیغات خودداری کنید** 🧾\n\nارسال هرگونه تبلیغات (سرور ، یوتیوب ، و... ) بدون هماهنگی غیر مجاز است.\n\n• ** برای دیگران ایجاد مزاحمت نکنید** 🔏\n\nارسال هرگونه تبلیغ و یا ایجاد مزاحمت در DM اعضای سرور غیر مجاز است.\n\n• **ایجاد تداخل و دخالت در نظر و تصمیم ادمین غیر مجاز است** 👨‍💼\n\nادمین های سرور برای ایجاد محیطی آرام و امن در تلاش اند و سعی دارند بر اساس قوانین سرور این محیط را کنترل کنند ، در نتیجه از ایجاد تداخل در اعمال ادمین ها خودداری کنید.`)

        await interaction.reply({
          embeds: [PerRulesEmbed],
          ephemeral: true
        })
      }

      if (interaction.customId === 'EngRule') {

        const PerRulesEmbed = new EmbedBuilder()
        .setColor(`#00aeff`)
        .setTitle(`🇺🇸 **English Rules**`)
        .setDescription(`• **Share a good personality** 😊\n\nTreat each other respectfully and politely on the server and use vulgar words، obscenity، insult beliefs، mock each other and... Refrain\n\n• **Use the appropriate name and profile ** 🖼️\n\nThe use of any bad words in your noun and status or use of any unethical photos and banners in your profile is unauthorized on the server.\n\n• ** Do not spam and do not disturb the order of the channel ** 📨\n\nDo not send messages, gifs, stickers, mentions and commands to the robot in a row . Doing so will disrupt the channel order and create clutter and confusion away from order and healthy conversation.\n\n• ** Do not send inappropriate or unauthorized content ** 🔞\n\nPosting any annoying and NSFW (porn) content in the server is not allowed because there are people of all ages in this server.\n\n• ** Avoid racist dialogue ** 👥\n\nRespect race, thoughts, ethnicity, gender, way of thinking, religion, beliefs, etc., and respectfully express your opinion, and never publish your insulting and racist thoughts and content.\n\n• **Avoid advertising** 🧾\n\nPosting any ads (server, YouTube And ...) without coordination is unauthorized.\n\n• ** Do not disturb others ** 🔏\n\nSending any ads or harassing server members in DM is unauthorized.\n\n•**Interfering with the opinion and decision of the administrator is unauthorized**👨‍💼\n\nServer admins try to create a calm and secure environment and try to control this environment according to the rules of the server, so avoid interfering with the actions of admins.`)

        await interaction.reply({
          embeds: [PerRulesEmbed],
          ephemeral: true
        })
      }

      let roleid;

      //Color role

      if (interaction.customId === `redbtn`) roleid = config.RedRole
      if (interaction.customId === `bluebtn`) roleid = config.BlueRole
      if (interaction.customId === `yellowbtn`) roleid = config.YellowRole
      if (interaction.customId === `greenbtn`) roleid = config.GreenRole
      if (interaction.customId === `orangebtn`) roleid = config.OrangeRole

    //Age role

      if (interaction.customId === `fifbtn`) roleid = config.fifteenRole
      if (interaction.customId === `eigredbtn`) roleid = config.eighteenRole
      if (interaction.customId === `twebtn`) roleid = config.twentyRole
      if (interaction.customId === `thibtn`) roleid = config.thirtyRole
      if (interaction.customId === `forbtn`) roleid = config.fortyRole

      //Mention role

      const AllMentionsroles =[config.MentionRole, config.AnnouncementRole, config.UpdateRole, config.EventRole]
      
      if (interaction.customId === 'addnb') {
        await interaction.member.roles.add(AllMentionsroles)
        await interaction.reply({
          content: 'Successfully Removed All Mentinon Roles From Your Profile.',
          ephemeral: true
        })
      }

      if (interaction.customId === 'revnb') {
        await interaction.member.roles.remove(AllMentionsroles)
        await interaction.reply({
          content: 'Successfully Added All Mentinon Roles From Your Profile.',
          ephemeral: true
        })
      }

      if (roleid) {
  
        if (interaction.member.roles.cache.has(roleid)) {
          await interaction.member.roles.remove(roleid);
          return interaction.reply({
            content: 'remove role!',
            ephemeral: true
          }).catch(() => console.log("Couldn't send remove role! message!"));
        }

        if (!interaction.member.roles.cache.has(roleid)) {
          await interaction.member.roles.add(roleid);
          await interaction.member.roles.add(config.BioRole);
          return interaction.reply({
            content: 'add role!',
            ephemeral: true
          }).catch(() => console.log("Couldn't send add role! message!"))
        }
      }

      if (interaction.customId === 'FeedBackbtn') {

        const modal = new ModalBuilder()
		.setCustomId('myModal')
		.setTitle('Criticisms And Suggestions');
		
		const FeedbackInput = new TextInputBuilder()
		.setLabel(`Your Feedback:`)
		.setCustomId(`FeedbackInput`)
		.setStyle(TextInputStyle.Paragraph)
		.setMinLength(4)
		.setMaxLength(1000)
		.setPlaceholder(`Write Your Feedback For We Staffs`)
		.setRequired(true)

		
		const firstActionRow = new ActionRowBuilder().addComponents(FeedbackInput)
		modal.addComponents(firstActionRow);
    await interaction.showModal(modal);

    
    const modalSubmitInteraction = await interaction.awaitModalSubmit({
      filter: (i) => {
       // console.log('Await Modal Submit');
       // console.log(i.fields);
        return true;
      },
      time: 120000, // 120 seconds = 120000 milliseconds, this is how long the user has to submit the modal before it errors. Use try / catch or .then().catch() to handle this.
    });

    modalSubmitInteraction.reply({
      content: `Thank you for Feedback`,
      ephemeral: true,
    });

    SendFeedBacksChannel = client.channels.cache.get(config.sendFeedbacksChannel);

    if(!SendFeedBacksChannel)
         {
	          console.log("Couldn't fetch Send FeedBacks channels!");
	          return;
        } 

        const embed = new EmbedBuilder()
        .setTitle(`is Send New Feedback !`)
		    .setColor(`Gold`)
		    //.setAuthor({ iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}`})
        .setAuthor({ name:`${interaction.member.displayName}`, iconURL: `${interaction.member.displayAvatarURL()}` })
		    .setDescription(`${modalSubmitInteraction.fields.getTextInputValue('FeedbackInput')}`)
		    .setTimestamp()

      
        
        SendFeedBacksChannel.send({ embeds: [embed] })
        //SendFeedBacksChannel.send(`${modalSubmitInteraction.fields.getTextInputValue('FeedbackInput')}`)
    //${modalSubmitInteraction.fields.getTextInputValue('FeedbackInput')}
      }


      
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

    const m = interaction.message;

    m.edit({
        components: m.components.map(row => {
            row.components = row.components?.map(v => {
                v.label = `${pol.votes[v.customId] || 0}`;

                return v;
            });

            return row;
        })
    })
    
});
