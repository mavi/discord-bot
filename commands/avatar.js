const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
	if (message.channel.type == 'dm') {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Bot Komutlarını Özel Mesajlarda Kullanamazsın.**')
    return message.author.sendEmbed(ozelmesajuyari) };

  let avatarUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!avatarUser) return message.channel.send("Avatarı alınacak kişi bulunamadı.");

    let uicon = avatarUser.user.avatarURL;
    let uname = avatarUser.user.username;
    let botembed = new Discord.RichEmbed()
    .setAuthor(uname, uicon)
    .setColor(0x00AE86)
    .setImage(uicon)
    return message.channel.send(botembed);
}


module.exports.help = {
  name: "avatar"
}
