const Discord = require('discord.js');

exports.run = (client, message, args) => {
	if (message.channel.type == 'dm') {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Bot Komutlarını Özel Mesajlarda Kullanamazsın.**')
    return message.author.sendEmbed(ozelmesajuyari) };

  if (message.author.id != "335725474984755200") return message.channel.send("Bunun için yetkin yok.");

  let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey söylemelisin.');
  message.delete();

  let uicon = message.author.avatarURL;
  let uname = message.author.username;
  const mssg = new Discord.RichEmbed()
  .setAuthor(uname, uicon)
  .setColor(0x00AE86)
  .setTitle(mesaj)
  message.channel.send(mssg);
};

exports.help = {
  name: 'yazdır2',
};
