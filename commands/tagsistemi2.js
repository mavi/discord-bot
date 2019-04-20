const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
  let allowedRole = message.guild.roles.find("name", "🔑 Teyitçi");
  if (!message.member.roles.has(allowedRole.id)) return message.delete().catch(O_o=>{}), message.reply("Teyitçi olmadığın için bu komutu kullanamazsın.");
  
  let tagUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tagUser) return message.channel.send("Kullanıcı bulunamadı.");

  let yeninick = args.join(" ").slice(22);

  let tag = await db.fetch(`tag_${message.guild.id}`);
  let sonnick = (tagUser.setNickname(`${tag} ${yeninick}`))
  message.delete()
  const nanan = new Discord.RichEmbed()
    .setTitle(`:fire: ${tagUser.user.username} kişisinin ismine başarıyla tag eklendi.`)
    .setColor(0x00AE86)
    return message.channel.sendEmbed(nanan);
};

exports.help = {
  name: 'tagekle'
};