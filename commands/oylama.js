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

  let uicon = message.author.avatarURL;
  let uname = message.author.username; 
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın!');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor(uname, uicon)
    .setTitle(`Oylama: ${mesaj}`)
    .setColor(0x00AE86)
    .setDescription(`\n Evet İçin :thumbsup:, Hayır İçin :thumbsdown: Tepkisine Tıklayınız.`)
      message.channel.send(embed).then(msg => {
        msg.react('👍')
        .then(r => {
          msg.react('👎')
})})};

exports.help = {
  name: 'oylama'
};
