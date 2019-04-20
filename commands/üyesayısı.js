const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.channel.send(`Sunucudaki üye sayısı: **${message.guild.memberCount} **`)
  message.react("✅");

};

exports.help = {
  name: 'üyesayısı',
};