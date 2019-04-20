const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  message.channel.send(`Sunucunun tacı şu anda <@${message.guild.owner.id}> kişisinde.`)
  message.react("👑");
};

exports.help = {
  name: 'taç',
};