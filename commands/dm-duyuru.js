const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.author.id != "335725474984755200") return message.channel.send("Bunun için yetkin yok.");

  let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.channel.send('Neyi duyurmak istiyorsun?');

  message.delete();

  console.log(`"${message.author.username}#${message.author.discriminator}" Tarafından Duyur Yapıldı: "${mesaj}"`);
      const mesajat = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setDescription('' + mesaj + '')
      
      client.users.forEach(u => {
u.sendEmbed(mesajat)
})

let duyurulogchannel = message.guild.channels.find(`name`, "📢│duyurular");
if(!duyurulogchannel) return message.channel.send("📢│duyurular kanalı bulunamadı!");
duyurulogchannel.send(mesajat);

message.channel.send(`:white_check_mark: Mesaj basariyla **` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** kullanıcıya gonderildi.`);

};

exports.help = {
  name: 'dmduyuru'
};