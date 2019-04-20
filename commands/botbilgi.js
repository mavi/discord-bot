const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (bot, message, args) => {
	if (message.channel.type == 'dm') {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Bot Komutlarını Özel Mesajlarda Kullanamazsın.**')
    return message.author.sendEmbed(ozelmesajuyari) };

    let bicon = bot.user.avatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("")
    .setColor(0x00AE86)
    .setThumbnail(bicon)
    .addField("• Hakkında", "Flash, geliştirilmeye devam eden bir moderasyon botudur.")
    .addField('• Erişilen Kitle:', bot.guilds.reduce((a, b) => a + b.memberCount, 0) + " Kullanıcı")
    .addField('• Bot Gecikmesi: ', bot.ping + ' Milisaniye')
    .addField("• Oluşturulma Tarihi", "23 Kasım 2018, 19:26")
    .addField("• Geliştirici", "<@335725474984755200>")
    .addField("• Versiyon", botconfig.version)
    return message.channel.send(botembed);
}

module.exports.help = {
  name: "botbilgi"
}
