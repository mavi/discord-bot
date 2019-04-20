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
	if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın!');
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription(`Oynuyor Kısmı Güncellendi: ${mesaj}`);
    message.delete();
    client.user.setActivity(`⚡ ${mesaj} ⚡`, { url: 'https://twitch.tv/blewkz' });
    console.log(`Oynuyor Kısmı Güncellendi!`);
    return message.channel.sendEmbed(embed);
};

exports.help = {
  name: 'oynuyor'
};