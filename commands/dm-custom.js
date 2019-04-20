const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.author.id != "335725474984755200") return message.channel.send("Bunun için yetkin yok.");

  let bumbe = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])); 
  if(!bumbe) return message.channel.send("Teyitsiz DM'si attıracağın kişiyi belirtmelisin.");

  let messaj = args.join(" ").slice(22);
  bumbe.sendMessage(messaj);
  
  message.delete();
  message.channel.send(`:white_check_mark: DM basariyla gonderildi.`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dmattır'],
  permLevel: 4
};

exports.help = {
  name: 'dmattır',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'dmattır'
};
