const Discord = require('discord.js');

module.exports.run = function (client, message, args) {
	if (message.channel.type == 'dm') {
      const ozelmesajuyari = new Discord.RichEmbed()
      .setColor(0xFF0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField('**Bot Komutlarını Özel Mesajlarda Kullanamazsın.**')
      return message.author.sendEmbed(ozelmesajuyari) };

let uicon = message.author.avatarURL;
let uname = message.author.username;
message.channel.sendEmbed(new Discord.RichEmbed()
.setAuthor(uname, uicon)
.setImage(`${message.author.avatarURL}`)
.setColor(0x00AE86));

}

exports.help = {
 name: 'avatarım'
};
