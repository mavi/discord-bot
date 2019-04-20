const Discord = module.require('discord.js');
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {

  if (message.author.id != "335725474984755200") return message.channel.send("Bunun için yetkin yok.");

   let rastgele = message.guild.members.random()
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Rastgele kullanıcı;')
    .setDescription(rastgele.displayName)
    .setThumbnail(rastgele.user.avatarURL)
    .setFooter('Blewkz')
    .setTimestamp()
    
    // 3 Dakika Sonra Mesaj ve Komutun Silinmesi
    message.channel.send(embed).then(msg => {msg.delete(180000)});
    message.delete(180000);
}

exports.help = {
  name: 'rastgelekişi'
};