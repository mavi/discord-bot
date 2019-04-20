const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = (client, message, args) => {
  if (message.channel.type == 'dm') {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Bot Komutlarını Özel Mesajlarda Kullanamazsın.**')
    return message.author.sendEmbed(ozelmesajuyari) };
  
  let allowedRole = db.get(`teyitcirol_${message.guild.id}`)
  if (!message.member.roles.has(allowedRole)) return message.delete(), message.reply("Bu komutu kullanmak için yetkin yok.");

  const hataembed = new Discord.RichEmbed()
  .setDescription(`Kullanımı: f!erkek @Kullanıcı`)
  .setColor(0x00AE86);
  if (message.mentions.users.size < 1) return message.channel.send(hataembed).catch(console.error);

  let teamRole = db.get(`erkekrol_${message.guild.id}`)
  if (!teamRole) return message.channel.send(`Hata! Verilecek rol bulunamadı.`).catch(console.error);
  
  let user = message.mentions.users.first();
  message.delete(), message.guild.member(user).addRole(teamRole);
  return message.reply(` tarafından <@${user.id}> adlı kullanıcıya <@&${teamRole}> rolü verildi.`)
};

exports.help = {
  name: 'erkek'
};