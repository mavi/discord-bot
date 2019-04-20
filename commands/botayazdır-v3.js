const Discord = require('discord.js');

const mapping = {
    ' ': '   ',
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '3': ':three:',
    '4': ':four:',
    '5': ':five:',
    '6': ':six:',
    '7': ':seven:',
    '8': ':eight:',
    '9': ':nine:',
    '!': ':grey_exclamation:',
    '?': ':grey_question:',
    '#': ':hash:',
    '*': ':asterisk:',
    'i': ':regional_indicator_i:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;

});

exports.run = function(client, message, args) {
  if (message.channel.type == 'dm') {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Bot Komutlarını Özel Mesajlarda Kullanamazsın.**')
    return message.author.sendEmbed(ozelmesajuyari) };

    if (message.author.id != "335725474984755200") return message.channel.send("Bunun için yetkin yok.");

	if (args.length < 1) return message.reply('Lütfen bir mesaj belirt.')
   
    message.delete()
      let uicon = message.author.avatarURL;
      let uname = message.author.username;
      let botembed = new Discord.RichEmbed()
      .setAuthor(uname, uicon)
      .setDescription(args.join(' ').split('').map(c => mapping[c] || c).join(' '))
      .setColor(0x00AE86)
      return message.channel.send(botembed);

};

exports.help = {
  name: 'emojiyazı'
};