const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    category: "Information",
    aliases: [ "addme" ],
    description: "Invite Rhyme",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
         
         
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/gfcv94hDhv")
			);

          const mainPage = new MessageEmbed()
            .setAuthor('Rhyme', 'https://media.discordapp.net/attachments/859359954598494218/887662609686482984/unknown.png?width=516&height=438')
            .setThumbnail('https://media.discordapp.net/attachments/859359954598494218/887662609686482984/unknown.png')
             .setColor('#303236')
            .addField('Invite Rhyme', `[Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot)`, true)
           message.channel.send({embeds: [mainPage], components: [row]})
    }
}
