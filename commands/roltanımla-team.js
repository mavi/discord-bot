const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`"\`Yönetici\`" olman gerek.`);
   message.delete();
   let rolismi = args.slice(0).join(" ");
   let role = message.guild.roles.find("name", rolismi);
   let teamrolü = db.fetch(`teamrol_${message.guild.id}`)
   
   if (!role) return message.channel.send('Girilen rol bulunamadı.')
   
     if(args[0] === "sıfırla") {
     if(!teamrolü) {
       message.channel.send(`Ayarlanmayan şeyi sıfırlayamazsın.`)
       return
     }
     
     db.delete(`teamrol_${message.guild.id}`)
     message.channel.send(`Rol başarıyla sıfırlandı.`)
     return
   }
 
   db.set(`teamrol_${message.guild.id}`, role.id)

   const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`Team rolü başarıyla ${role.name} olarak tanımlandı.`)
   message.channel.send(embed);

};
  exports.help = {
    name: 'roltanımla-team'
  };