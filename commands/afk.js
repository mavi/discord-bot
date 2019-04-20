const Discord = require('discord.js')

exports.run = async (client, message, args) => {
	if (message.channel.type == 'dm') {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Bot Komutlarını Özel Mesajlarda Kullanamazsın.**')
    return message.author.sendEmbed(ozelmesajuyari) };

    let sebep = args.join(" ");
    if(sebep.length < 1) {
    return message.reply('AFK sebebini belirtmelisin.')
    } else {
   message.delete()
   const afk = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTitle(`${message.author.username}, "${sebep}" sebebi ile AFK olduğunu belirtti.`)
      .setTimestamp()
      message.channel.send(afk);

    }
};

  exports.help = {
    name: 'afk'
  };