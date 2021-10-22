const { MessageEmbed, CommandInteraction, Client, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
    name: "about",
    description: "Show project information",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: false
        });
   const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/98ePBCHaze")
			);

      const mainPage = new MessageEmbed()
            .setAuthor('Rhyme', 'https://media.discordapp.net/attachments/859359954598494218/887662609686482984/unknown.png?width=516&height=438')
            .setThumbnail('https://media.discordapp.net/attachments/859359954598494218/887662609686482984/unknown.png?width=516&height=438')
            .setColor('#303236')
            .addField('Creator', 'BunnyPro#9146', true)
            .addField('\u200b',
                `Rhyme was created by Bunny. Hope you enjoy using Rhyme!`
            )
        await interaction.followUp({embeds: [mainPage], components: [row]});
    }
}
